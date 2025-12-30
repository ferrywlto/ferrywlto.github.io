---
title: 'Creating iOS Widgets with MAUI — Part 1: Interoperability'
description: 'Finding a way to call Swift code from C#'
pubDate: '2025-11-13'
tags: [dotnet, maui, ios, xcode, mobile-development]
heroImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oQXT19nJS_pfzjfeM8quMQ.png'
---

[Microsoft .NET](https://dotnet.microsoft.com/en-us/) is a great platform that allows you to do many different things with the same tech stack, from game development, machine learning, websites to mobile applications. .NET 10 is the latest version released just a few days ago. Do check it out.

[MAUI (Multi-platform App UI)](https://dotnet.microsoft.com/en-us/apps/maui) lets you build native applications across Windows/macOS/Linux/iOS/Android with a reusable codebase. However it has some limitations (e.g. accessing platform specific hardware), depending on what you need to do.

This is a series of recordings on how I create an iOS widget that works with MAUI. It took me a few days to figure out the tricks and articles about this topic is limited. This is the first post of the series and hope it helps someone working on the MAUI. In this post we will talk about the pre-requisite: **Interoperability**.

Disclaimer: I am just sharing my personal experience. I do not guarantee the information in this post is 100% correct or accurate. I am not, by any means, expressing that I am an expert in mobile development.

## Why do we need interoperability?

This is because there are APIs that MAUI SDK doesn’t provide. e.g. `WidgetKit`. You can embed a widget into your app, but it is pointless if you cannot control it. Therefore in order to control something that is not available from the MAUI SDK, you will need some workaround for it. 
**In short, that means finding a way to call Swift code from C#.**

In this post we will try to call Swift `NSLog()` from our MAUI C# code, which simply prints “Hello World” in the console.


![Default MAUI App](https://miro.medium.com/v2/resize:fit:724/format:webp/1*ACQk7threjwBtsyvPuhyjA.png)
![Hello World from Swift](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SdDdTgMMTkVoGe1grXXLzA.png)

### Pre-requisites

- .NET 10 SDK
- Xcode 26.1

## Create a MAUI project.
Run `dotnet new maui`, then `dotnet restore`.

If this is the first time you build a MAUI project, you will be asked to run `dotnet workload restore` with elevated privilege.

Open your new project `.csproj` file, at the top remove all values from TargetFramework tag except `net10.0-ios`. This is because we don’t need to support other platforms for this task. Do the same for `SupportedOSPlatformVersion` and `TargetPlatformMinVersion` tags.

Your project file should look like this:
```xml
<Project Sdk="Microsoft.NET.Sdk">

 <PropertyGroup>
  <TargetFrameworks>net10.0-ios</TargetFrameworks>

  <OutputType>Exe</OutputType>
  <RootNamespace>test</RootNamespace>
  <UseMaui>true</UseMaui>
  <SingleProject>true</SingleProject>
  <ImplicitUsings>enable</ImplicitUsings>
  <Nullable>enable</Nullable>

  <!-- Display name -->
  <ApplicationTitle>test</ApplicationTitle>

  <!-- App Identifier -->
  <ApplicationId>com.companyname.test</ApplicationId>

  <!-- Versions -->
  <ApplicationDisplayVersion>1.0</ApplicationDisplayVersion>
  <ApplicationVersion>1</ApplicationVersion>

  <!-- To develop, package, and publish an app to the Microsoft Store, see: https://aka.ms/MauiTemplateUnpackaged -->
  <WindowsPackageType>None</WindowsPackageType>

  <SupportedOSPlatformVersion Condition="$([MSBuild]::GetTargetPlatformIdentifier('$(TargetFramework)')) == 'ios'">15.0</SupportedOSPlatformVersion>
 </PropertyGroup>

 <ItemGroup>
  <!-- App Icon -->
  <MauiIcon Include="Resources\AppIcon\appicon.svg" ForegroundFile="Resources\AppIcon\appiconfg.svg" Color="#512BD4" />

  <!-- Splash Screen -->
  <MauiSplashScreen Include="Resources\Splash\splash.svg" Color="#512BD4" BaseSize="128,128" />

  <!-- Images -->
  <MauiImage Include="Resources\Images\*" />
  <MauiImage Update="Resources\Images\dotnet_bot.png" Resize="True" BaseSize="300,185" />
  
  <!-- Custom Fonts -->
  <MauiFont Include="Resources\Fonts\*" />

  <!-- Raw Assets (also remove the "Resources\Raw" prefix) -->
  <MauiAsset Include="Resources\Raw\**" LogicalName="%(RecursiveDir)%(Filename)%(Extension)" />
 </ItemGroup>

 <ItemGroup>
  <PackageReference Include="Microsoft.Maui.Controls" Version="$(MauiVersion)" />
  <PackageReference Include="Microsoft.Maui.Essentials" Version="$(MauiVersion)" />
  <PackageReference Include="Microsoft.Extensions.Logging.Debug" Version="10.0.0" />
 </ItemGroup>

</Project>
```

## Create and export a C interface from Xcode.

Open Xcode. From `File → New → Project`, choose `iOS → Framework & Library → Static Library`.

Name the product `HelloWorldBridge`, leave everything else as defaults.

You will have a solution with a single project that having a single file created. The only source file `HelloWorldBridge.swift` is an empty class.

![Xcode project structure](https://cdn-images-1.medium.com/max/1600/1*NlXj7TB2DQhZ-fDeFu9SvQ.png)

Remove everything existing from the source file and replace with:
```swift
import Foundation

@_cdecl("HelloWorldBridge_SayHello")
public func HelloWorldBridge_SayHello() {
  NSLog("👋 Hello World from Swift (Static Library)!")
}
```

The `@_cdecl` directive means this function will be exported as C-ABI (Application Binary Interface), which will be imported into our MAUI app. Even LLMs suggested different ways of doing interoperability and contradicting each other, this approach is what I found the most stable. **This has also been verified with very recent MAUI samples repo update by Microsoft folks [here](https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fdotnet%2Fmaui-samples%2Fblob%2Fmain%2F10.0%2FPlatformIntegration%2FLiveActivityDemo%2Fnative%2FLiveActivityBridge%2FSources%2FLiveActivityBridge%2FBridge.swift).**

From the top of Xcode, select “Any iOS Simulator Device (arm64, x86_64)” as build target. Select `Product → Build` or pressing `(Cmd+B)` to build it.

![Top of Xcode](https://cdn-images-1.medium.com/max/1600/1*S3dC99-tNMEJl10pSMUavQ.png)

Select from menu `Product → Show Build Folder in Finder`, finder will show your project Build folder, which is the built artefacts will be placed.

The build folder path will usually be: `$(Home)/Library/Developer/Xcode/DerivedData/{YourProjectName}-{RandomProjectId}/Build`.

![Xcode menu to show build folder](https://cdn-images-1.medium.com/max/1600/1*kDwHDHenk2K1Re1giH2OWA.png)

Inside `Products > Debug-iphonesimulator`, you should be able to see your built static library archive `libHelloWorldBridge.a`.

![Build folder in finder](https://cdn-images-1.medium.com/max/1600/1*uRj5lLm9vwef5lMqBu78CA.png)

3. Integration

Copy `libHelloWorldBridge.a` to your MAUI project’s `Platforms/iOS/Frameworks` folder (You can place it to `Platforms/iOS` as well, just my preference).

Create a file named `HelloWorldBridge.cs` inside `Platforms/iOS` with content below:

```csharp
#if IOS
using System.Runtime.InteropServices;

public static class HelloWorldBridge
{
    [DllImport("__Internal", EntryPoint = "HelloWorldBridge_SayHello")]
    private static extern void _SayHelloStaticLib();

    public static void SayHelloStaticLib() => _SayHelloStaticLib();
}
#endif
```

The `#if` and `#endif` directives limited the code within it will be included only when build target is iOS, you can omit them for now as we only target iOS for this demo. What this bridge code does is to link the exported C interface with .NET. Note that no matter you exported a xcframework or static library (`.a`), `"__Internal"` is the only valid name, using any name other than this will probably throw DllNotFoundException during run time. You will see the EntryPoint parameter need to match the name we defined with `@_cdecl` in our Swift file.

The idea of the bridge is to map a public static method in C# to an exposed Objective-C interface, which eventually calls some Swift code.

Now go to MainPage.xaml.cs generated by MAUI project template and edit OnCounterClicked event handler, add these to the bottom of the method:

```csharp
HelloWorldBridge.SayHelloStaticLib();
```

The final piece of the puzzle is to tell MSBuild to include your copied static library. Open your project .csproj file, place the following at the bottom of the file, right above the closing tag `</Project>` :
```xml
<ItemGroup>
 <NativeReference Include="Platform/iOS/Framework/libHelloWorldBridge.a">
  <Kind>Static</Kind>
  <ForceLoad>true</ForceLoad>
 </NativeReference>   
</ItemGroup>
```

Build and launch your MAUI app with:

`dotnet build -t:Run -f net10.0-ios -r iossimulator-arm64`

Tap on the “Click me” button and you should see the Hello World message.

![Hello World from Swift](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SdDdTgMMTkVoGe1grXXLzA.png)

🎉 **Congratulations!** You have just successfully calling Swift code from C#! 👏

In next post we will create the widget and embed into a MAUI app.

Complete code sample can be found [[here]](https://github.com/ferrywlto/maui-interop-demo).

The original article is published on [[Medium]](https://ferrywlto.medium.com/creating-ios-widgets-with-maui-part-1-interoperability-d73d6f2c563c?postPublishedType=repub).
