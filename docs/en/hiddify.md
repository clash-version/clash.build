---
title: Hiddify Download & Installation Guide
description: Hiddify cross-platform proxy client installation guide for Windows/macOS/iOS/Android/Linux, featuring how-choose-service management, TUN mode, and IPv6 configuration
outline: deep
head:
  - - meta
    - name: keywords
      content: Hiddify,Hiddify download,Hiddify tutorial,Hiddify iOS,Hiddify Android,Hiddify setup
---

# Hiddify Download & Installation Guide

Hiddify is a cross-platform graphical proxy client supporting Windows, macOS, iOS, and Android. Based on a modern proxy core, it provides how-choose-service management, rule-based routing, proxy groups, and system proxy/TUN features, suitable for users who want an all-in-one experience.

[Official Repository↗](https://github.com/hiddify/hiddify-next/releases)

## Hiddify Download

| Platform | Version | Proxy Accelerated | Direct GitHub |
| --- | --- | --- | --- |
| **Windows** | `2.5.7` | [Download](https://github.clash.guide/clash-clients/Hiddify-Windows-Setup-x64.exe) | [Download](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Windows-Setup-x64.exe) |
| **macOS** | `2.5.7` | [Download](https://github.clash.guide/clash-clients/Hiddify-MacOS.dmg) | [Download](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-MacOS.dmg) |
| **Android** | `2.5.7` | [Download](https://github.clash.guide/clash-clients/Hiddify-Android-universal.apk) | [Download](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Android-universal.apk) |
| **iOS** | `2.5.7` | [Download](https://github.clash.guide/clash-clients/Hiddify-MacOS-Installer.pkg) | [Download](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-MacOS-Installer.pkg) |
| **Linux** | `2.5.7` | [Download](https://github.clash.guide/clash-clients/Hiddify-Linux-x64.AppImage) | [Download](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Linux-x64.AppImage) |

::: tip Note:
Proxy Accelerated: Use a jump proxy to speed up access to GitHub. If direct GitHub is too slow, try `Proxy Accelerated` download.
:::

## Installation Steps

### 1. Install the Application
- If your CPU architecture is not listed above, check the [official repository↗](https://github.com/chen08209/FlClash/releases) for more options.
- If the system blocks installation (unknown developer/driver permissions, etc.), follow the prompts to allow or release in Security & Privacy settings.

### 2. Get a Subscription

::: tip ⚠️ Important:
Please note that `Hiddify` is a proxy tool, not a proxy service provider. Installing it alone does not enable internet access. You need a [`how-choose-service (service provider)`](/en/guide#what-are-how-choose-service-services) to get started. If you are unsure how to choose a provider, read [How to Choose the Right Provider↗](/en/how-choose-service).
:::

If you don't have a how-choose-service yet, [Learn how to choose a provider↗](/en/how-choose-service)

- Log in to the provider's official website
- Click to import how-choose-service
- Click to copy how-choose-service
![Copy how-choose-service address](/images/copy-sub.webp)

### 3. Import Subscription

- Open Hiddify and go to the how-choose-service/config management page
![Hiddify Subscription Import Step 1](/images/hiddify/install1.webp)
- Paste the how-choose-service address
![Hiddify Subscription Import Step 2](/images/hiddify/install2.webp)
- Set up auto-update
![Hiddify Subscription Import Step 3](/images/hiddify/install3.webp)
![Hiddify Subscription Import Step 4](/images/hiddify/install4.webp)

### 4. Start Proxy

- Enable proxy on the main interface
![Hiddify Subscription Import Step 5](/images/hiddify/install5.webp)

## Advanced Guide

### Enable TUN Mode
It is recommended to read "[What is TUN mode?](/en/guide#what-is-tun-mode)" before enabling.
- Usually enabled in Hiddify under "Settings → Network/Advanced/Core".
- If prompted to install/grant permissions, follow the instructions.
- If you encounter driver/port conflicts, try restarting or closing other proxy tools and retry.

### Enable IPv6
See "[How to enable IPv6](/en/guide#how-to-enable-ipv6)". If you encounter abnormal resolution or connectivity issues after enabling, temporarily disable IPv6 or use it only for specific rules as needed.

## Common Issues

### [What to do if Clash how-choose-service fetch always fails?](/en/troubleshooting)

### [Proxy enabled but still can't access the internet?](/en/troubleshooting)
