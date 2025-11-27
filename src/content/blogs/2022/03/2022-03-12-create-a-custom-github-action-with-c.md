---
title: 'Create a Custom GitHub Action with C#'
description: 'Detailed guide on building a custom GitHub Action using C#, Docker, and deploying it to GitHub Marketplace'
pubDate: '2022-03-12'
heroImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*x5JcQqXS6hCLubog'
tags: ['csharp', 'docker', 'github-actions', 'devops']
---
This post is one of my #Everything in CSharp series.

If you have a GitHub account like me, chances that you will heard or used GitHub Actions. In GitHub Actions can you create workflows to automate tasks from building the source code to deploy application to cloud infrastructure. A workflow consists of steps, and in each step we can call other action to complete some task for us. For example, the most famous action are `actions/checkout` from GitHub. Everyone need that to access our own repository.

Rather than using actions created by other developers. Is it possible we can contribute by creating actions that other developers can use? YES! 

Today we will learn the basics of how to make one with C#. We will use that to update our GitHub profile repository `README.md` file.

Actions that created by developers are called [[Custom Actions]](https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions). 

There are three types of them:

- JavaScript action  
- Docker container action  
- Composite action  

If your action code written in language other than JavaScript, you will need to create a docker container action. You can read the official documentations of GitHub for details about JavaScript and Composite action.

## Create our C# console app

Our focus is to create a C# application, containerize it, and then wrap it as a custom action. Let’s create and initialize a Github repo.

```bash
gh repo create custom-action
cd custom-action
touch action.yml entrypoint.sh Dockerfile
```

These 3 files are important. Let’s create our C# app now.
```bash
mkdir src
cd src
dotnet new console
```
The app we create will reads:

- The file name to edit.  
- The Medium user id.  
- The Stackoverflow user id.  

After loading and parsing blog post from [[Medium.com]](https://medium.com) and [[Stackoverflow.com]](https://stackoverflow.com), the app will update the content inside the file name we passed as argument.

## Entry point of our custom action

```csharp
if (args.Length <= 0) throw new ArgumentException("Please supply arguments.");

var filePath = args[0];

if (!File.Exists(filePath)) throw new FileNotFoundException($"Cannot find file {filePath} to edit.");

string[] sequence = new[] {"","MEDIUM", "STACKOVERFLOW"};
var action = new ReplaceReadmeContentAction();

const string paramValueDefault = "unknown";
const string argumentErrorStr = "Please supply arguemnt: `{0}` to action.";
const string paramNameDefault = "{0}-user-id";

for(var i=1; i<args.Length; i+=1) {
    var param = args[i];
    if (string.IsNullOrEmpty(param) || param.Equals(paramValueDefault))
        throw new ArgumentException(string.Format(argumentErrorStr, string.Format(paramNameDefault, sequence[i].ToLower())));

    action.AddStep(new Step(
        ContentLoaderFactory.GetContentLoader(sequence[i]),
        new ContentReplacer(sequence[i]),
        args[i]
    ));
}

var text = File.ReadAllText(filePath);
text = await action.Run(text);
File.WriteAllText(filePath, text);
```

Since our focus is on the custom action. Details of the C# app please refer the source code [[here]](https://github.com/ferrywlto/update-readme-action-csharp).

## Create our custom action that run our C# console app

Now you have a C# console app ready. Time to build it into a docker container. Return to your project root folder and edit `Dockerfile`.

```yaml
FROM mcr.microsoft.com/dotnet/sdk:6.0 as builder
COPY /src /app
RUN dotnet publish -c Release -o /out /app/custom-action.csproj
COPY entrypoint.sh /out/entrypoint.sh

FROM mcr.microsoft.com/dotnet/runtime:6.0 as base
COPY --from=builder /out /app
RUN chmod +x /app/entrypoint.sh
```

The `Dockerfile` is very simple and use multi-stage approach. In the first stage we use the dotnet SDK image as the build layer, copy all C# app file to that layer `/app` directory and publish the app. Note that we will also copy `entrypoint.sh` to the publish folder. We will cover this file very soon. In second stage use dotnet runtime image and copy the built content into it. The `chmod +x` command ensure no permission problem when executing `entrypoint.sh`.

Note that we don’t have `ENTRYPOINT` set in our `Dockerfile`, this is because we will override it in our `action.yml` to provide flexibility. This file defines the custom action and looks like below:

Every custom action could have `inputs` and `outputs` defined depends on use case. In our actions we will defines 3 inputs that I have mentioned in earlier section. `file-to-update`, `medium-user-id`, and `stackoverflow-user-id`. Since our action is aimed to update GitHub profile therefore the we have `README.md` as `file-to-update` default value.

The `runs` section is almost the same for every custom action. We are creating docker container custom action so the `using` field must be `docker`, and the `image` field should points to the docker file you create. In our case it is the `Dockerfile` located at the same folder of `action.yml` so the value is also `'Dockerfile'`.

The `args` field is the place where you organise your defined input and pass them to your containerised C# app. When our custom action is called, a container will be created. Once the container created, it will execute what we defined in `entrypoint` field. In our setup all arguments defined in `args` field will pass to `/app/entrypoint.sh`.

```bash
#!/bin/sh -l

dotnet /app/custom-action.dll $@
```

Our `entrypoint.sh` is a simple one-liner but critical. It run our C# app by executing `dotnet` command targeting our built `.dll`. Note the use of `$@` here, `$@` in bash means expanding all arguments. Combining this with our `action.yml` setup, we can easily pass any numbers of argument into our C# app. This remove the limitation that you have to know the number of arguments in advance when setting `ENTRYPOINT` inside `Dockerfile`.

## Publish our custom action to GitHub Marketplace

Now we are everything ready. Commit the changes and push to GitHub:

```bash
git add .
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

Note that we need to tag our commit in order to publish to GitHub Actions marketplace.

![publishing-action-to-marketplace](https://miro.medium.com/v2/resize:fit:1294/format:webp/1*Z_n8SSMSmki7PdMIs92D0A.png)

Now head to your GitHub repository page you should see this:

![releasing-action](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CqotnE94jojxu_aJ_DFABg.png)

![releasing-action-details](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CqotnE94jojxu_aJ_DFABg.png)

After you clicked on `Draft a release` you will see your action is ready to publish. GitHub requires your `action.yml` contains branding information so include them if you haven’t or if you want to change the color and icon used.

Once you click on `Publish release`, your action are released to GitHub Marketplace and when you view your action in marketplace it will look similar like this:

![published-action-marketplace](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DhZ-BGXbCFVM1k2uVcau7g.png)

## Using our action in workflow

As our custom action is to update the content of `README.md`, let’s try it in your Github profile repository.

In your profile repository page, click `Actions` > `New workflow` > `setup a workflow yourself`, a `main.yml` has created under your repository `/.github/workflows` folder. Update the file with content below:

```yaml
name: Update README.md

on:
  schedule:
    - cron: '0 0 * * *'
  workflow_dispatch:

jobs:
  update-readme-sample:
    runs-on: ubuntu-latest
    name: Update README.md
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Load blog posts and update README.md
        uses: <your_github_username>/custom-action@v1
        with:
          medium-user-id: ${{ secrets.MEDIUM_USER_ID }}
          stackoverflow-user-id: ${{ secrets.STACKOVERFLOW_USER_ID }}

      - name: Commit README.md changes.
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          git commit -m "generated"
          git push
        shell: bash
```

This workflow will do the following:

1. It trigger at 00:00 everyday or manually activated in GitHub.  
2. It checkout your repository files.  
3. It use your created custom action, setting parameters using your repository secret, to update the content of `README.md` in your repository.  
4. It commit the changes of `README.md` back to your repository default branch.  

If you want to test it now you can trigger the workflow manually in Actions tab.

![run-workflow-manually](https://miro.medium.com/v2/resize:fit:1342/format:webp/1*aJ6bZ5PiBznY2rFBm2I0cw.png)

## Extra: Getting output from your C# app

We learned how to pass argument into our C# app run inside a docker container, what if we want to return something from our app to the workflow? Here is the way:

1. Defining outputs  

In `action.yml`, define `outputs` field as follow:

```yaml
inputs:
  input_param1:
outputs:
  output_param1: 
   description: 'some description'
  output_param2:
runs:
  using: 'docker'
  image: 'Dockerfile'
```

2. Writing to outputs from C# app:
```csharp
var output = "hello world"
Console.WriteLine($"::set-output name=output_param1::{output}");
```

3. Using the returned outputs:
```yaml
jobs:
  my-job:
    steps:
      - name: Load blog posts and update README.md
        id: my_custom_action
        uses: <your_github_username>/custom-action
        with:
          medium-user-id: ${{ secrets.MEDIUM_USER_ID }}
          stackoverflow-user-id: ${{ secrets.STACKOVERFLOW_USER_ID }}

      - run: echo ${{ steps.my_custom_action.outputs.output_param1 }}
```

Note that since you can set output parameters value via `Console.WriteLine()` only, therefore the output must be string.

Today we have learned how to build a docker container image for our C# app, created a custom GitHub action and then export it to GitHub Marketplace, and also learned how to use your created custom action in workflows of your repositories. Once again you can refer to my [[demo custom action repo]](https://github.com/ferrywlto/update-readme-action-csharp) if you encountered issues.

I look forward to see your great custom actions on GitHub Marketplace soon! Take care and stay tuned for my next #Everything in CSharp series!

This post was originally published on [[Medium.com]](https://medium.com/@ferrywlto/create-a-custom-github-action-with-c-b056de359cb5).
