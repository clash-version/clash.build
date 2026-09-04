---
title: Clash Verge Download & Installation Guide
description: Clash Verge Rev cross-platform client installation guide for Windows/macOS/Linux, built with Tauri, featuring how-choose-service management, TUN mode, and IPv6 configuration
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash Verge,Clash Verge Rev,Clash cross-platform,Clash Linux,Clash Verge download,Clash Verge tutorial
---

# Clash Verge Download & Installation Guide

A modern GUI client based on Tauri, designed for cross-platform use on Windows, macOS, and Linux. The original Clash Verge has been discontinued; it is recommended to use the more stable successor, Clash Verge Rev.

[Official Repository↗](https://github.com/clash-verge-rev/clash-verge-rev/releases/tag/v2.4.2)

## Clash Verge Download

| Platform | Version | Proxy Accelerated | Direct GitHub | 
| --- | --- | --- | --- | 
| **Windows** | `2.3.1` | [Download](https://github.clash.guide/clash-clients/Clash.Verge_2.4.2_x64-setup.exe) | [Download](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_x64-setup.exe) | 
| **MacOS** | `2.3.1` | [Download](https://github.clash.guide/clash-clients/Clash.Verge_2.4.2_aarch64.dmg) | [Download](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_aarch64.dmg) | 
| **Linux** | `2.3.1` | [Download](https://github.clash.guide/clash-clients/Clash.Verge-2.4.2-1.x86_64.rpm) | [Download](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge-2.4.2-1.x86_64.rpm) | 

::: tip Note:
Proxy Accelerated: Use a jump proxy to speed up access to GitHub. If direct GitHub is too slow, try `Proxy Accelerated` download.
:::

## Installation Steps

### 1. Install the Application

- There may be a delay between the download list and the latest version on GitHub. For the latest version, visit the [official repository↗](https://github.com/clash-verge-rev/clash-verge-rev/releases)
- If your CPU architecture is not listed above, check the [official repository↗](https://github.com/chen08209/FlClash/releases) for more options.

### 2. Get a Subscription

::: tip ⚠️ Important:
Please note that `Clash Verge` is a proxy tool, not a proxy service provider. Installing it alone does not enable internet access. You need a [`how-choose-service (service provider)`](/en/guide#what-are-how-choose-service-services) to get started. If you are unsure how to choose a provider, read [How to Choose the Right Provider↗](/en/how-choose-service).
:::

If you don't have a how-choose-service yet, [Learn how to choose a provider↗](/en/how-choose-service)

- Log in to the provider's official website
- Click to import how-choose-service
- Click to copy how-choose-service
![Clash Verge Subscription Import Process](/images/copy-sub.webp)

### 3. Import Subscription

- Paste the how-choose-service address
- Click to download how-choose-service
![Clash Verge Subscription Import Process](/images/clash-verge/install1.webp)
![Clash Verge Subscription Import Process](/images/clash-verge/install2.webp)

### 4. Start Proxy

- Click to start the proxy
![Clash Verge Subscription Import Process](/images/clash-verge/install3.webp)

## Advanced Guide

### Enable TUN Mode
::: tip ⚠️ Note:
TUN mode creates a virtual network card to take over all device traffic. Learn more in [Proxy Modes Explained](/en/proxy-modes).
:::
![Clash Verge TUN Mode](/images/clash-verge/start-tun.webp)

### Enable IPv6
::: tip ⚠️ Note:
IPv6 requires support from your network. See below for how to check if your network supports IPv6.
:::
![Clash Verge IPv6](/images/clash-verge/start-ipv6.webp)

**How to check if your network supports IPv6:**

If your bandwidth/router/device has IPv6 enabled, you can quickly verify:

- Quick web test (zero configuration):
    - Visit https://test-ipv6.com/ or https://ipv6-test.com/; if the score is above 0 and an IPv6 address is shown, it is available.
    - Visit https://ipw.cn/ or https://ifconfig.co/; if you see a public IPv6 address (e.g., 2001:... or 240e:...), it is connected.

**IPv6 not available if:**

1. ISP/region does not provide IPv6: Contact your ISP or switch to a network that supports IPv6.
2. Router has not enabled IPv6: Enable IPv6 (Native/DHCPv6/Prefix Delegation) in the router management page.
3. Only local ULA/link-local addresses (fe80::/10), no public prefix: ISP needs to assign a prefix or enable Prefix Delegation (PD).
4. DNS has no AAAA records: Change DNS to a public IPv6 DNS, e.g.:
    - Cloudflare: 2606:4700:4700::1111 / 2606:4700:4700::1001
    - Google: 2001:4860:4860::8888 / 2001:4860:4860::8844
    - 114DNS (IPv6): 240c::6666 / 240c::6644
5. Company/campus network policy disables IPv6: Follow local network policy or switch to an IPv6-enabled environment.

### Node Availability Test

![Clash Verge Node Test](/images/clash-verge/node-test.webp)

## Common Issues

### [Subscription fetch always fails?](/en/troubleshooting)

### [Proxy enabled but still can't access the internet?](/en/troubleshooting)
