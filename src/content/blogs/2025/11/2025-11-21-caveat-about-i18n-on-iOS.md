---
title: 'Caveat about i18n on iOS'
description: 'Fun finding about Cantonese UI culture detection on iOS devices.'
pubDate: '2025-11-21'
tags: ['dotnet', 'maui', 'ios']
heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
---
When developing applications, no matter it is web / desktop / mobile app. We have to deal with internationalization (i18n) at some point. One interesting finding I had recently was about how iOS devices detect UI culture, especially for Cantonese (Hong Kong).

For developers that comes from Hong Kong should be no stranger to the `zh-HK` locale code. I assume most developers would expect the same when the device region is set to Hong Kong, the UI culture would be detected as `zh-HK`.

During development of an app with MAUI, I created `AppResources.resx` for default (English), `AppResources.zh-HK.resx` for Traditional Chinese (Hong Kong). But the UI didn't respect the language settings on my iPhone set to Traditional Chinese (Hong Kong). When I logged the detected UI culture, it showed as `yue-Hant-HK`.

![Detected UI Culture](detected-ui-culture.png)
 
It turns out that `yue` is the [ISO 639-3 code](https://iso639-3.sil.org/code/yue) for spoken Cantonese language, while `Hant` indicates Traditional Chinese characters. `yue-Hant-HK` is a valid [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). 

This shows Apple recognizes Cantonese as a separate language, which is appreciated. On Android devices, the detected locale would be `zh-HK` as expected, which groups the spoken and written forms together. In order to have a single resource file for both platforms, I used the code below:

```csharp
#if IOS
var ui = CultureInfo.CurrentUICulture;

// Treat any Cantonese tag as zh-HK
if (ui.Name.StartsWith("yue", StringComparison.OrdinalIgnoreCase))
{
    var mapped = new CultureInfo("zh-HK");
    CultureInfo.DefaultThreadCurrentUICulture = mapped;
    CultureInfo.DefaultThreadCurrentCulture = mapped;
}
#endif
```
