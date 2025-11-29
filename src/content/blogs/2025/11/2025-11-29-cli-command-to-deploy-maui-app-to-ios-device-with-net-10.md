---
title: 'CLI command to deploy MAUI App to iOS device with .NET 10'
description: 'A snippet to make your deploy MAUI app to iOS device with CLI.'
pubDate: '2025-11-29'
heroImage: '/images/blogs/maui-deploy-ios-cli/maui-deploy-ios-cli-cover.png'
tags: ['maui', 'dotnet', 'ios', 'msbuild', 'mobile-development']
---

# CLI command to deploy MAUI App to iOS device with .NET 10

A short snippet to make your MAUI app development life easier.

When developing MAUI app, we usually use [[Visual Studio]](https://visualstudio.microsoft.com/) or [[Rider]](https://www.jetbrains.com/rider/). I have been a paid Rider user for many years. To be honest it is great and it will help you do much of the heavy lifting out of the box when you need to deploy your app to a physical device for testing.

However I use [[VSCode]](https://code.visualstudio.com/) most of the time and try to figure out ways to use the CLI to do as many things as possible, because I am a minimalist and the best part of the CLI is that it is good for automating tasks in scripts. In addition, it may save you the subscription fee if all you need is a way to deploy the app to your device.

I assume you have the latest Xcode installed with [[Xcode CLI]](https://developer.apple.com/download/all/).

In .NET 10, the command you use to build your app for iOS device should be:

```bash
dotnet build -f net10.0-ios -r ios-arm64
```

```xml
<Target Name="DeployToDevice" AfterTargets="Build" Condition="'$(TargetFramework)'=='net10.0-ios' And $(RuntimeIdentifier) == 'ios-arm64'">
  <PropertyGroup>
    <MlaunchPath>$(DOTNET_ROOT)/packs/Microsoft.iOS.Sdk.net10.0_26.1/26.1.10494/tools/bin/mlaunch</MlaunchPath>
    <DeviceName>PinkRabbit</DeviceName>
    <AppId>VerdantSparks.OurTimeLeft</AppId>
    <AppBundlePath>$(MSBuildProjectDirectory)/bin/Debug/net10.0-ios/ios-arm64/OurTimeLeft.Maui.app</AppBundlePath>
    <iOSSdkVersion>14.2</iOSSdkVersion>
    <XcodeSdkRoot>/Applications/Xcode.app/Contents/Developer</XcodeSdkRoot>
    <Command>$(MlaunchPath) --devname $(DeviceName) --killdev $(AppId) --wait-for-unlock --argument=-connection-mode --argument=usb -sdk $(iOSSdkVersion) --sdkroot $(XcodeSdkRoot)</Command>
  </PropertyGroup>
  <Exec Command="$(Command) --installdev &quot;$(AppBundlePath)&quot;" />
  <Exec Command="$(Command) --launchdev &quot;$(AppBundlePath)&quot;" />
</Target>
```

Then the magic comes from this:

```bash
/usr/local/share/dotnet/packs/Microsoft.iOS.Sdk.net10.0_26.1/26.1.10494/tools/bin/mlaunch
```

Which `/usr/local/share/dotnet` is the value of the environment variable `DOTNET_ROOT.`

If you look at the content of the `packs` folder, you can see the SDKs installed for different platforms.

![packages inside packs folder.](https://miro.medium.com/v2/resize:fit:1400/1*LVo2rbUl1XdEswmV7avBIQ.png)

To deploy your built `.app` to your iOS device, there are multiple switches you will need along side the `mlaunch` executable:

```bash
$(DOTNET_ROOT)/packs/Microsoft.iOS.Sdk.net10.0_26.1/26.1.10494/tools/bin/mlaunch \
  --devname [YouriPhoneDevice] \
  --killdev [YourAppId] \
  --wait-for-unlock \
  --argument=-connection-mode \
  --argument=usb \
  -sdk 26.1 \
  --sdkroot /Applications/Xcode.app/Contents/Developer \
  --installdev [YourProjectRoot]/bin/Debug/net10.0-ios/ios-arm64/[YourAppName].app
```

These switches specify your device by its name, connect to it via a USB cable, wait for you to unlock the device, close your app if it is already installed and running, and finally install your app.

To find your device name, you can run:

```bash
xcrun xctrace list devices
```

That's all for deploying your app to an iOS device.

What if you also want to launch the app automatically after deployment?

You will have to call the same command again but this time replace the `--installdev` switch with `--launchdev`:

```bash
# These have to be separate mlaunch commands for install and launch.

$(DOTNET_ROOT)/packs/Microsoft.iOS.Sdk.net10.0_26.1/26.1.10494/tools/bin/mlaunch \
  --devname [YouriPhoneDevice] \
  --killdev [YourAppId] \
  --launchdev [YourProjectRoot]/bin/Debug/net10.0-ios/ios-arm64/[YourAppName].app \
  --wait-for-unlock \
  --argument=-connection-mode \
  --argument=usb \
  -sdk 26.1 \
  --sdkroot /Applications/Xcode.app/Contents/Developer
```

If you don’t like manually calling this command in shell scripts by your own like me, I have created a MSBuild target to automate this:

```xml
<Target Name="DeployToDevice" AfterTargets="Build" Condition="'$(TargetFramework)'=='net10.0-ios' And $(RuntimeIdentifier) == 'ios-arm64'">
  <PropertyGroup>
    <MlaunchPath>$(DOTNET_ROOT)/packs/Microsoft.iOS.Sdk.net10.0_26.1/26.1.10494/tools/bin/mlaunch</MlaunchPath>
    <DeviceName>YourDeviceName</DeviceName>
    <AppId>Your.App.Id</AppId>
    <AppBundlePath>$(MSBuildProjectDirectory)/bin/Debug/net10.0-ios/ios-arm64/YourApp.app</AppBundlePath>
    <iOSSdkVersion>26.1</iOSSdkVersion>
    <XcodeSdkRoot>/Applications/Xcode.app/Contents/Developer</XcodeSdkRoot>
    <Command>$(MlaunchPath) --devname $(DeviceName) --killdev $(AppId) --wait-for-unlock --argument=-connection-mode --argument=usb -sdk $(iOSSdkVersion) --sdkroot $(XcodeSdkRoot)</Command>
  </PropertyGroup>
  <Exec Command="$(Command) --installdev &quot;$(AppBundlePath)&quot;" />
  <Exec Command="$(Command) --launchdev &quot;$(AppBundlePath)&quot;" />
</Target>
```

So that when you run the command from the beginning of this post, your app will get deployed to and launched on your iOS device after build succeeds.

I hope this short post will save you time (and perhaps money) in MAUI development. 😀

This post was originally published on [[Medium]](https://ferrywlto.medium.com/cli-command-to-deploy-maui-app-to-ios-device-with-net-10-19d4d0d9ff28?postPublishedType=initial).
