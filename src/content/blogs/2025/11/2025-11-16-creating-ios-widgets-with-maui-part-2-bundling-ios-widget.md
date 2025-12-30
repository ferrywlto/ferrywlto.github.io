---
title: 'Creating iOS Widgets with MAUI - Part 2: Bundling iOS Widget'
description: 'Bundling an iOS widget into a MAUI app so that the app can interact with the widget.'
pubDate: '2025-11-16'
tags: [dotnet, maui, ios, xcode, mobile-development]
heroImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9pkIYNAA8oXMPbFHtRPeRw.png'
---

This is the second part of the series recording how I managed to create a MAUI app that can interact with an iOS widget. In this post, we will explore how to create a Hello World widget in iOS and have our MAUI app bundle it. I highly recommend reading the first post, [Creating iOS Widgets with MAUI - Part 1: Interoperability](https://ferrywlto.medium.com/creating-ios-widgets-with-maui-part-1-interoperability-d73d6f2c563c?postPublishedType=repub), if you haven't read it yet, as the topic in this post will require knowledge from the previous one.

Disclaimer: I am just sharing my personal experience. I do not guarantee the information in this post is 100% correct or accurate. I am not, by any means, expressing that I am an expert in mobile development.

## Creating the widget

In Xcode, create a new App project. Although we don't use this App project in our MAUI app development, this App project has its value to us. We will cover this in later sections.
For Team, please choose the personal team Xcode created for you. Carefully choose your **Organization Identifier** and remember the **Bundle Identifier** - we will use them soon.

![Create widget project](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ejU9OZelomPTEUCl1KH8Jg.png)

Your project should looks like this:

![Project folder structure](https://miro.medium.com/v2/resize:fit:712/format:webp/1*6bSmClhe_wwcIGzxXW0mcg.png)

Click **File > New > Target** to create a Widget extension. Note that you cannot create a Widget extension without an App project. Name your widget extension something like "**HelloWidgetExtension**" and leave everything as default. Make sure both Project and Embed in Application are set to your App project. When asked to activate the scheme, click Yes.

![Target menu](https://miro.medium.com/v2/resize:fit:1140/format:webp/1*hKszZaPQRtHHSfVHmmcEjA.png)

![Widget selection](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-8Wifspsy9AVX0jCJX6blQ.png)


Run the App from Xcode to make sure everything works in Simulator. You should be able to create the widget under your App project.

Note:

If your App has bundle identifier "**MyOrg.HelloWidget**", then your widget extension bundle identifier must be prefixed with your app's bundle identifier, e.g. "**MyOrg.HelloWidgetWidgetExtension**".

![Add widget in simulator](https://miro.medium.com/v2/resize:fit:452/format:webp/1*oeH87P0azS2fCmeyAD4aeg.png)

## Bundle the widget in our MAUI app

Using the same MAUI project we created in the previous post, we are going to replace the identity of the Xcode App project with our MAUI app.
Edit your MAUI project file and make sure the value in `<ApplicationId>` is exactly the same as the Xcode App project. You can view and set it under the Xcode top-level project > **Build** Settings.

```xml
<ApplicationId>MyOrg.HelloWidget</ApplicationId>
```

![Bundle identifier](https://miro.medium.com/v2/resize:fit:756/format:webp/1*2fUtrQ4EyD8dFi_aC3EFMA.png)
![Build settings](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bY0dyO3kqQfcvhTP8SY5Ag.png)


Create a folder PlugIns under **Platforms/iOS**.

Back to Xcode:

At the top, choose the scheme created when the widget extension project was created, then choose **Any iOS Simulator Device (arm64, x86_64)** next to the scheme. Build the widget extension.

![Xcode build target](https://miro.medium.com/v2/resize:fit:920/format:webp/1*mjcxwQAp3eni5ry5vFMWHA.png)

Go to **Product > Show Build Folder in Finder**. From **Products > Debug-iphonesimulator**, you should see a file named: HelloWidgetExtension.appex . Copy this into your MAUI project's Platforms/iOS/PlugIns folder.

Your folder structure should look like this:

![MAUI platform folder](https://miro.medium.com/v2/resize:fit:712/format:webp/1*hibrnU01vf6LB9KOrbxcdw.png)


Open your MAUI project file. Remember the section we created to include the static library we exported? Add the following into that same section:

```xml
<BundleResource Include="Platforms/iOS/PlugIns/**">
  <LogicalName>PlugIns/%(RecursiveDir)%(Filename)%(Extension)</LogicalName>
</BundleResource>
```

Delete the bin and obj folders to ensure we have a clean build.

Build the project again with this command:
```bash
dotnet build -f net10.0-ios -r iossimulator-arm64
```
Finally launch our MAUI app with:
```bash
dotnet run -f net10.0-ios -r iossimulator-arm64 -p:_DeviceName=:v2:udid=[your_simulator_id]]
```
You can also use a single command as below, it is just my personal preference:
```bash
dotnet build -t:Run -f net10.0-ios -r iossimulator-arm64
```

You will find that our MAUI app now replaces the Xcode app. You can now try creating the widget under our MAUI app's name. Tapping on the widget will open our MAUI app.

![gif showing adding widget and opening MAUI app](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TK_wO0Q7wmRn0kim0M_vEQ.gif)

Note:

1. You can configure your MAUI project .csproj file to automate the extension copying work.
2. Some suggests the use of `<AdditionalAppExtensions>` , but I didn't try it yet.

🎉 **Congratulations!** You have bundled an iOS widget into your MAUI app. 👏
Simply bundling an iOS widget into our MAUI app is not very helpful if we are not able to interact with it. In the next (and final) post of the series, we will go over what we have learned so far to communicate between them.

The full source code of this demo project can be found at my [GitHub repository](https://github.com/ferrywlto/hello-maui-widget)

This post was originally published on [Medium](https://medium.com/@ferrywlto/creating-ios-widgets-with-maui-part-2-bundling-ios-widget-a309e890e046).
