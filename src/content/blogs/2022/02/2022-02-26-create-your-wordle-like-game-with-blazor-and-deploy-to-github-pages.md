---
title: 'Create your Wordle like game with Blazor and deploy to GitHub Pages'
description: 'Learn how to build a Wordle-like game using Blazor and deploy it to GitHub Pages for easy access and sharing.'
pubDate: '2022-02-26'
heroImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*m2axePdzIAQ2NGUH'
tags: ['CSharp', 'Blazor', 'WebAssembly', 'Game Development', 'GitHub Pages', 'Frontend Development']
---

Welcome to my Everything in C# series. Wordle is a recently famous word guessing game like Mastermind where each guess return whether each letter is in the right position or just contained in the answer. This time we are going to implement a similar version with Microsoft Blazor technology. I have put my game on GitHub pages. You can take a look and play if interested.

![Wordle Game Sample](https://miro.medium.com/v2/resize:fit:1000/format:webp/1*ImijvP05qHmjMbIz3AcILQ.png)

## What is Blazor?

Blazor is a technology that can run C# code on browser using WebAssembly. In past .NET developers relies on Razor pages for front-end development. Now we can use Blazor to create SPA as if we are using other framework like React/Vue/Angular.

For more information you can check this link: https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor

## Getting Started

If you do not have .NET SDK installed please follow the steps here: https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/install

We are creating a pure client side game with Blazor WASM mode. Once finished you can deploy your game to static web hosting service (e.g. GitHub Pages) and let people play around.

1. Create your project directory.  
2. Open your command prompt / Terminal and change to your project directory. Execute `dotnet new blazorwasm` . Your project folder should look like this.

![Folder structure](https://miro.medium.com/v2/resize:fit:270/format:webp/1*WKpM4ZqyukZajdl7KU1Flw.png)

3. Execute `dotnet run` to check if it works.

![Hello world](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*frPKtXkDOuHmOgyPuaYB2Q.png)

When everything works fine. Let’s start to build our game.

## Game Logic in C#

1. We need a way to load the answers, thus we have the following class:
```csharp

public class AnswerProvider {
    private static readonly List<string> WordList = new();
    private static readonly Random Random = new();
    private readonly HttpClient _httpClient;
    private readonly string _filePath;
    public AnswerProvider(HttpClient httpClient, string filePath) {
        _httpClient = httpClient;
        _filePath = filePath;
    }
    public async Task<string> GetNewAnswer() {
        if (WordList.Count == 0) {
            await LoadAnswersAsync();
        }

        var idx = Random.Next(WordList.Count - 1);
        return WordList[idx];
    }
    private async Task LoadAnswersAsync() {
        WordList.Clear();
        var fileContent = await _httpClient.GetStringAsync(_filePath);
        WordList.AddRange(fileContent.Split(Environment.NewLine));
    }
}
```

2. Then we need to add this into service container. Open `Program.cs` , look for lines `builder.Services.xxxx` and insert the following code:
```csharp
builder.Services.AddSingleton(
    sp => {
        var httpClient = sp.GetRequiredService<HttpClient>();
        const string filePath = "word-list.txt";
        return new AnswerProvider(httpClient, filePath);
    }
  );
```

Your `Program.cs` file should look like this:
```csharp
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddSingleton(
    sp => {
        var httpClient = sp.GetRequiredService<HttpClient>();
        const string filePath = "word-list.txt";
        return new AnswerProvider(httpClient, filePath);
    });
builder.Services.AddTransient(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddMudServices();

await builder.Build().RunAsync();
```

The code here tells Blazor to return the same object (Singleton) when requested by Pages/Components and config the `AnswerProvider` that `word-list.txt` is the source of answers file.

3. Now it comes to the game logic, they are pretty straight forward. The `Guess` class responsible to do the matching of each guess and return result of that guess. The `Game` class control the game state, determine whether the user is win or lose. Note how we provide an `event` to update code that are interested in knowing the game state has changed.
```csharp
// Game.cs
public class Game {
    public string Answer { get; private set; }
    private int MaxAttempt { get; set; }
    public readonly List<GuessResult[]> Results;
    public readonly Dictionary<char, MatchResult> Distribution = new();
    public event Action? GameUpdated;
    public bool IsWin { get; private set; }
    public bool IsLose => !IsWin && Results.Count >= MaxAttempt && !Answer.Equals(string.Empty);

    public Game() {
        Answer = string.Empty;
        Results = new List<GuessResult[]>();
    }

    public void Reset(string answer, int maxAttempt) {
        IsWin = false;
        Answer = answer;
        MaxAttempt = maxAttempt;
        Results.Clear();
        Distribution.Clear();
        GameUpdated?.Invoke();
    }

    public void Guess(string input) {
        if(IsWin || IsLose) return;
        if(Answer.Equals(string.Empty)) return;
        if(Results.Count == MaxAttempt) return;

        var guess = new Guess(Answer);
        var guessResults = guess.Match(input);

        MatchDistribution(guessResults);

        Results.Add(guessResults);
        IsWin = guess.Win();
        GameUpdated?.Invoke();
    }

    private void MatchDistribution(IEnumerable<GuessResult> results) {
        foreach ((var letter, var matchResult) in results) {
            if (!Distribution.ContainsKey(letter)) {
                Distribution[letter] = matchResult;
                continue;
            }

            var matchType = Distribution[letter];

            if(matchType == MatchResult.NoneHit && matchResult != MatchResult.NoneHit ||
               matchType == MatchResult.CharHit && matchResult == MatchResult.FullHit)
            {
                Distribution[letter] = matchResult;
            }
        }
    }
}

// Guess.cs
public class Guess {
    private readonly GuessResult[] _result;
    private readonly string _answer;
    public Guess(string answer) {
        _answer = Cleanse(answer);
        _result = new GuessResult[answer.Length];
    }
    public bool Win() => _result.All(g => g.Result == MatchResult.FullHit);

    public GuessResult[] Match(string input) {
        if (input.Length != _answer.Length)
            throw new Exception("Should have same length.");

        input = Cleanse(input);

        for (var i = 0; i < input.Length; i += 1) {
            if (!char.IsLetter(input[i]) || !char.IsLetter(_answer[i])) throw new Exception("Should contains letter only.");

            _result[i] = new GuessResult(input[i], DetermineResult(input[i], _answer[i]));
        }

        return _result;
    }

    private MatchResult DetermineResult(char charFromInput, char charFromAnswer) {
        if (charFromInput.Equals(charFromAnswer)) return MatchResult.FullHit;
        return _answer.Contains(charFromInput) ? MatchResult.CharHit : MatchResult.NoneHit;
    }

    private static string Cleanse(string input) => input.Trim().ToLower();
}

// GuessResult.cs
public record GuessResult(char Letter, MatchResult Result);

// MatchResult.cs
public enum MatchResult {
    NoneHit,
    CharHit,
    FullHit
}
```

4. Finally we also need to take care of player input, so we have the `GameInput` class. This class is responsible for manipulating the buffer of player’s input and flush out the buffer for `Game` and `Guess` to consume.
```csharp
public class GameInput {
    public event Action? InputChanged;
    private char[] _buffer = Array.Empty<char>();
    private int _idx;
    private int _size;
    public char GetInputAt(int idx) {
        if (BufferNotSet()) return ' ';

        if (idx < 0) idx = 0;
        if (idx > _buffer.Length) idx = _buffer.Length;
        return _buffer[idx];
    }
    public string Flush() {
        if (!CanFlush())
            throw new Exception("Pre-mature flush. Do it only when buffer is fully filled.");

        var text = string.Join(string.Empty, _buffer);
        ResetBuffer();

        return text;
    }

    public void Input(char letter) {
        if(BufferNotSet() || InvalidIndexRange()) return;

        if(_buffer[_idx].Equals(' '))
            _buffer[_idx] = letter;

        if (_idx < MaxIndex) {
            _idx += 1;
        }

        InputChanged?.Invoke();
    }
    public void Back() {
        if(BufferNotSet() || InvalidIndexRange()) return;

        if (_idx > MinIndex) {
            if (_buffer[_idx].Equals(' ')) {
                _idx -= 1;
                _buffer[_idx] = ' ';
            }
            else {
                _buffer[_idx] = ' ';
            }
        }

        InputChanged?.Invoke();
    }

    public void Reset(int length) {
        _size = length;

        ResetBuffer();
    }

    private void ResetBuffer() {
        _buffer = Enumerable.Repeat(' ', _size).ToArray();
        _idx = MinIndex;
    }

    public bool CanFlush() => _buffer.All(char.IsLetter);
    private bool BufferNotSet() => _buffer.Length == 0;
    private bool InvalidIndexRange() => _idx < MinIndex || _idx > MaxIndex;
    private int MinIndex => 0;
    private int MaxIndex => _buffer.Length - 1;
}
```

5. Do not forget to config our service container for `Game` and `GameInput` . We will need them in our UI. In `Program.cs` add the following lines:
```csharp
builder.Services.AddSingleton<Game>();
builder.Services.AddSingleton<GameInput>();
```

The complete `Program.cs` should look like this:
```csharp
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddSingleton<Game>();
builder.Services.AddSingleton<GameInput>();
builder.Services.AddSingleton(
    sp => {
        var httpClient = sp.GetRequiredService<HttpClient>();
        const string filePath = "word-list.txt";
        return new AnswerProvider(httpClient, filePath);
    });
builder.Services.AddTransient(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
```

That’s all for the game logic. Quite simple isn’t it?

## The Game UI with Blazor

1. Clean up project and removing unused code.

Return to our project structure:

![Updated folder structure](https://miro.medium.com/v2/resize:fit:432/format:webp/1*JAc8hb4KXQlWrhVw7ljGhw.png)

Since we only care about the game, most of the generated files in default project setup are not needed.

For `Pages` , keep only `Index.razor`

For `Shared`, keep only `MainLayout.razor` and `MainLayout.razor.css`

For `wwwroot` , remove `sample-data`

Open `MainLayout.cs` and remove everything and leave only these lines:

```html
<div class="page">
  <main>@Body</main>
</div>
```
because we don’t need a side bar in our project.

2. Build player input UI

Create `Input` folder under `Pages` directory. Then In `Input` folder create new files `KeyboardButton.razor` and `KeyboardButton.razor.css` :

```csharp
// KeyboardButton.razor
@inject Game _game

<div Class=@("key-button " + GetCssStyle()) onclick="@OnClick">@Text</div>

@code {
    [Parameter]
    public char Text { get; set; }

    [Parameter]
    public Action<MouseEventArgs> OnClick { get; set; } = null!;

    private string GetCssStyle() {
        if (!_game.Distribution.ContainsKey(Text)) return "letter-container";

        var matchResult = _game.Distribution[Text];
        return matchResult switch {
            MatchResult.NoneHit => "btn-not-hit",
            MatchResult.CharHit => "btn-partial-hit",
            MatchResult.FullHit => "btn-full-hit",
            _ => string.Empty
        };
    }
}

// KeyboardButton.razor.css
.btn-not-hit {
    background-color: dimgray !important;
    color: white !important;
}
.btn-partial-hit {
    background-color: darkgoldenrod !important;
    color: white !important;
}
.btn-full-hit {
    background-color: darkgreen !important;
    color: white !important;
}
```

In Blazor, you can add CSS style to `app.css` to make a style globally available. If you create a CSS file named after a component (e.g. `component.razor.css` ), the styles defined in the file will available to that component only (scoped). We call this [[CSS isolation]](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/css-isolation?view=aspnetcore-6.0).

Remember we did configured the service container to return the same `Game` object when requested? The first line `@inject Game _game` tells Blazor that when creating this component, inject an instance of `Game` so we can access the properties and methods of it.

In Blazor when we annotated a property with `[Parameter]` attribute, then this parameter can be set when other component contains this component. For example, assuming there is another component and it contains a `KeyboardButton` then you can set the parameters like this:

```html
<KeyboardButton Text="A" OnClick="@(_ => Console.WriteLine(key))"/>
```

You can also reference code in markup by prepending `@` .

```csharp
// Keyboard.razor
@using GameLogic
@inject Game _game
@inject GameInput _gameInput
<div id="container" tabindex="0" @onkeydown="OnKeyDown" @ref="_container" @onfocusout="CatchFocus">
    <div class="keyboard-row">
        <KeyboardRow KeysToGenerate="_keyboardRows[0]" />
    </div>
    <div class="keyboard-row">
        <KeyboardRow KeysToGenerate="_keyboardRows[1]" />
    </div>
    <div class="keyboard-row">
        <div>
            <div class="key-button letter-container" @onclick="_ => Guess()" >enter</div>
        </div>
        <KeyboardRow KeysToGenerate="_keyboardRows[2]"/>
        <div>
            <div class="key-button letter-container" @onclick="_ => Back()" >back</div>
        </div>
    </div>
</div>

@code {
    private ElementReference _container;
    private char[][] _keyboardRows = {
        new[] { 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' },
        new[] { 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' },
        new[] { 'z', 'x', 'c', 'v', 'b', 'n', 'm' },
    };
    protected override async Task OnAfterRenderAsync(bool firstRender) { await CatchFocus(); }
    private async Task CatchFocus() => await _container.FocusAsync();
    private void OnKeyDown(KeyboardEventArgs e) {
        if(e.Repeat) return;

        var value = e.Key.Trim().ToLower();
        switch (value) {
            case "enter": Guess();
                return;
            case "backspace": Back();
                return;
            default: {
                if(value.Length == 1 && char.IsLetter(value[0]))
                    _gameInput.Input(value[0]);
                break;
            }
        }
    }

    private void Back() => _gameInput.Back();
    private void Guess() {
        if(!_gameInput.CanFlush()) return;

        _game.Guess(_gameInput.Flush());
    }
}
```

```css
// Keyboard.razor.css
#container:focus-visible {
    outline: none;
}
#container:focus {
    outline: none;
}
#container {
    min-width: 420px;
    width: 720px;
}
```

```csharp
// KeyboardRow.cs

@using System.ComponentModel.DataAnnotations
@using GameLogic
@inject GameInput _gameInput

@if (KeysToGenerate != null) {
    @foreach (var key in KeysToGenerate) {
        <div >
            <KeyboardButton Text="@key" OnClick="@(_ => _gameInput.Input(key))"/>
        </div>
    }
}

@code {
    [Parameter]
    public char[]? KeysToGenerate { get; set; }
}
```

There are 2 points in `Keyboard.razor` worth we to look at.

1. You can reference an HTML element in Blazor code via creating a variable of type `ElementReference` and use `@ref` attribute to map the HTML element to the said variable.
2. By setting focus to the container `div` tag after component finished rendering and set the focus back to the container whenever focus is lost, we can ensure to catch all player keypress event.

Now we have a player input UI as below:

![Input UI](https://miro.medium.com/v2/resize:fit:664/format:webp/1*QnOr-9pqaVmS9CsPl8wehg.png)

3. Build the game display

There are two types of display needed, one for showing what player inputted; One for showing the guess results. Note how we can change the CSS style at run-time.

```csharp
// InputLetterBox.razor
<div Class=@("tile " + GetCssClass())>@Letter</div>

@code {
    [Parameter]
    public char Letter { get; set; }

    private string GetCssClass() {
        return Letter switch {
            ' ' => "tile-empty",
            _ => "tile-input"
            };
    }
}
```

```css
// InputLetterBox.razor.css
.tile-input {
    font-weight: bold;
    background-color: black;
    color: wheat;
    border: 2px solid wheat;
}
.tile-empty {
    font-weight: bold;
    background-color: dimgrey;
    border: 2px solid grey;
}
```

```csharp
// LetterBox.razor
@using GameLogic
<div Class=@("tile " + GetCssClass())>@Letter</div>

@code {
    [Parameter]
    public char Letter { get; set; }

    [Parameter]
    public MatchResult MatchResult { get; set; }

    private string GetCssClass() {
        return MatchResult switch {
            MatchResult.FullHit => "tile-full-hit",
            MatchResult.CharHit => "tile-partial-hit",
            MatchResult.NoneHit => "tile-not-hit",
            _ => throw new ArgumentOutOfRangeException()};
    }
}
```

```css
// LetterBox.razor.css
.tile-full-hit {
    font-weight: bold;
    background-color: darkgreen;
    color: white;
}
.tile-partial-hit {
    font-weight: bold;
    background-color: darkgoldenrod;
    color: white;
}
.tile-not-hit {
    font-weight: bold;
    background-color: dimgray;
    color: white;
}
```

The letter box should look like this:

![Sample letter box](https://miro.medium.com/v2/resize:fit:682/format:webp/1*U1v5D3dxYfEa728TInosMg.png)

4. Stitch things together.

Now we return to `Index.razor` and edit it like below:

```csharp
// Index.razor
@page "/"
@inject Game _game
@inject GameInput _gameInput
@inject AnswerProvider _answerProvider
@implements IDisposable

<div class="app mx-auto">
    <div class="my-row">
        <div class="top">
        @if (_game.IsLose) {
            <div class="my-row mb-1 alert-warning">
                @_game.Answer.ToUpper()
            </div>
            <br/>
        }
        @foreach (var guessResult in _game.Results) {
            <div class="my-row mb-1">
                @foreach ((var letter, var matchResult) in guessResult) {
                    <LetterBox Letter="letter" MatchResult="matchResult" />
                }
            </div>
        }
        @if (_game.IsWin) {
            <div class="my-row mb-16 alert-success">Congratuations!</div>
        }
        else if(!_game.IsLose) {
            <div class="my-row mb-16">
                @for (var i = 0; i < _game.Answer.Length; i += 1) {
                    var idx = i;
                    <InputLetterBox Letter="_gameInput.GetInputAt(idx)"/>
                }
            </div>
        }
        </div>
    </div>
    <div class="my-row">
        <Keyboard/>
    </div>
</div>
@code {
    public void Dispose() {
        _game.GameUpdated -= OnGameUpdated;
        _gameInput.InputChanged -= OnInputChanged;
    }
    protected override async Task OnInitializedAsync() {
        _game.GameUpdated += OnGameUpdated;
        _gameInput.InputChanged += OnInputChanged;

        var answer = await _answerProvider.GetNewAnswer();
        _game.Reset(answer, 6);
        _gameInput.Reset(answer.Length);
    }

    private void OnInputChanged() { InvokeAsync(StateHasChanged); }
    private void OnGameUpdated() { InvokeAsync(StateHasChanged); }
}
```

```css
// Index.razor.css
.top {
    margin: 1vh 0 1vh 0;
    overflow-x: hidden;
    overflow-y: scroll;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    min-width: 420px;
    width: 720px;

    max-height: 40vh;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.top::-webkit-scrollbar {
    display: none;
}
```

Things we can learn here:

1. We use `@page "/"` here to route this page as default page.
2. How we listen to `Game` and `GameInput` update event.
3. How we load `word-list.txt` and set answer of current game on page initialised in `OnInitializedAsync()` method.
4. When we want Blazor to re-render the screen, we can call the method `StateHasChanged()`
5. To avoid memory leak, it is a best practice to remove the event listener when we unload/close the page. We can do this by implementing `IDisposable` interface and put the cleanup code inside `Dispose()` method.

Finally, we edit `app.css` to add shared styles used in our game. Append these style at the bottom of `app.css` :

```css
// app.css
.letter-container {
    background-color: black !important;
    color: wheat !important;
}
.tile {
    width: 15vw;
    height: 15vw;

    max-width: 64px;
    max-height: 64px;
    min-width: 64px;
    min-height: 64px;

    font-size: 3rem;
    line-height: 3rem;
    justify-content: center;
    align-items: center;

    display: inline-flex;

    margin: 0 3px 0 3px;

    text-transform: uppercase;
}
.key-button {
    min-width: 32px !important;
    width: 100% !important;
    font-weight: bold !important;

    text-transform: uppercase;
    margin: auto;
    text-align: center;
    vertical-align: middle;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 5px;
}
.my-row {
    display: flex;
    justify-content:center;
    margin:auto;
}
```
Note: Remember to create your own `word-list.txt` and copy to `wwwroot` folder.

Now open your terminal/command prompt and run `dotnet run` to play your game. :)

![Sample game result](https://miro.medium.com/v2/resize:fit:778/format:webp/1*-swoLf2m2ulGgJvxxA1byg.png)

## Publish Your Game

When you are ready, open your terminal/command prompt and run `dotnet publish -c Release` . You can find your project files at `/bin/Release/net6.0/publish/wwwroot `

![Published content of your project](https://miro.medium.com/v2/resize:fit:334/format:webp/1*qffll73DTI92iBN7zBwukQ.png)

If you have a GitHub account, you can create a new repository and then go to `Settings` page. Click `Pages` on the left menu and you can now choose which branch to publish. We use the default setting this time, click `Save` to finish.

![GitHub Pages setup](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*89-yqfSDHuY-rchRwNV5gA.png)


Now clone the repository and then copy all files in `publish/wwwroot` folder to your repository root directory. Commit the changes and push to GitHub.

Congratulations! You can now play your game at:

`https://your-github-username.github.io/your-repository-name`

## Challenge Yourself

To test about the knowledge you gained in this project, try to add a button in `Index.razor` . Display only if game is ended. When clicked the reset with a new answer.

## Summary

You have just created your own Wordle like game using C# and Blazor. Now you can deployed your game to static web host and invite your friends to get it a try.

If you watch the code carefully, the game logic and UI supports:

* Variable length answer. You can even contains words of different length in your answer file. It will just work for longer/shorter word.
* You can also set how many attempts a player allowed to guess to increase/decrease difficulty.
* Start a new game upon player win/lose by clicking on the restart button. Theres no limit of game allowed per day.
* Of course you can style the game with your own taste!

Features of original [[Wordle]](https://www.nytimes.com/games/wordle/index.html) that we didn’t implemented (not highly related to Blazor):

* User progress tracking.
* Share result to social network. (Those ⬜ squares. )

The full source code can be found on my [[GitHub repo]](https://github.com/ferrywlto/EICS.Muddle), which used [[Mudblazor]](https://mudblazor.com/) UI component library instead of bootstrap. Have fun and stay tuned for the next fun project of my `#EverythingInCSharp` series!

This article was originally published on [[Medium]](https://ferrywlto.medium.com/create-your-wordle-like-game-with-blazor-and-deploy-to-github-pages-d2129b71727f).
