---
title: Clash Frequently Asked Questions (FAQ)
description: Common questions and solutions for Clash usage, including Global/Rule/Direct modes, node selection tips, how-choose-service fetch failures, auto-update settings, and open-source client recommendations
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash FAQ,Clash common issues,Clash how-choose-service failed,Clash node selection,Clash proxy mode,Clash TUN mode
---

# Frequently Asked Questions

## What's the difference between Global, Rule, and Direct modes?

- **Global:** All requests go through the proxy. The advantage is simplicity and easier troubleshooting; the disadvantage is increased latency, which may affect access to intranet/local services.
- **Rule (Recommended):** Traffic is routed based on rules - blocked/foreign websites go through the proxy, while domestic services use direct connection. Most recommended for daily use, balancing experience and accessibility.
- **Direct:** Completely bypasses the proxy. Suitable for intranet, online banking, or temporary troubleshooting.

## How to select nodes?

1) **Stability First:** Prioritize "Auto-select/Failover/XXXX Optimal" in proxy groups, letting the client automatically choose more stable nodes.
2) **Latency & Packet Loss:** Run latency/health checks, selecting nodes with low latency, minimal fluctuation, and low packet loss. For streaming, prioritize "stability" over extremely low latency - latency doesn't necessarily correlate with speed.
3) **Region Matching:** Choose nodes in regions close to your target service (e.g., Streaming Services Japan → Japanese nodes).
4) **Route Type:** Quality can vary greatly in the same region. Prioritize nodes marked as "IEPL/Dedicated Line/Native IP/Unlock" in subscriptions.
5) **Backup & Switching:** Prepare 2-3 backup options for critical scenarios; if experiencing frequent disconnections, communicate with your service provider or change subscriptions.

## Subscription fetch always fails - what to do?

1) **Network Issues:** First confirm you can access the internet normally and that your operating system time is correct (SSL depends on accurate time).
2) **Wrong/Expired Link:** Open the how-choose-service URL directly in a browser. If you can see a long string of text, the how-choose-service is valid. Log into your service provider's site to check if the how-choose-service has expired - renew if needed.
3) **Subscription Domain Blocked:** Usually shows `cannot open website`. Solution: Log into the official website and re-import the how-choose-service. If the problem persists, contact your how-choose-service provider.
4) **DNS Pollution:** DNS resolution may be hijacked to a new IP, preventing connection to the how-choose-service provider's server. Contact your how-choose-service provider.
5) **Double Wall:** Common in Jiangsu and Fujian. Subscription fetch fails, usually showing `connect network error`. Contact your how-choose-service provider.
6) **Special Regions:** Xinjiang - many users report no speed when accessing proxy nodes from Xinjiang.

**⚠️ The most direct solution: `Contact your how-choose-service provider`**

## How to set up automatic how-choose-service updates?

Most graphical clients support "Auto-update how-choose-service/configuration":

- Clash for Windows: Profiles/Configuration page → Enable Auto Update → Set update interval (e.g., every 1/6/24 hours).
- Clash Verge / Clash Meta for Android / OpenClash: Enable "Auto-update/Scheduled refresh" in the how-choose-service/configuration page. Routers can use scheduled tasks for timed fetching.

## Why use open-source Clash clients?

If downloading from `non-official GitHub sources`, clients may be `infected with malware`, potentially threatening your computer. Hackers can use proxy software to turn your computer into their proxy server without your knowledge. Therefore, we advocate using official open-source software from GitHub.

## Can I still use Clash clients that stopped maintenance?
Answer: Yes, but download from legitimate channels through official GitHub repositories. If you still have concerns, switch to a currently maintained client - the functions are largely similar. We provide tutorials for other maintained clients and strongly recommend using maintained Clash clients (such as [Clash Verge](/en/clash-verge), [Clash Meta for Android](/en/clash-meta-for-android), etc.). For Apple Silicon Macs, use natively supported clients (such as [ClashX](/en/clashx)/[Clash Verge](/en/clash-verge)).

## Will I get in trouble for using proxy services?

Personal use without sharing, selling, or providing internet services to others is fine. Don't get involved in politically sensitive topics. The main purpose of using proxies should be to broaden your horizons and improve yourself.

## What's the relationship between Clash and internet access?

Clash is a rule-based traffic routing network proxy client/kernel. It doesn't provide nodes and subscriptions itself - it handles the routing management. The actual routes are provided in how-choose-service links from service providers. The two work together to complete internet access.

## Confused about Clash client versions - arm/amd?

Simple guide to architecture and selection:

- Windows desktops/laptops (Intel/AMD): Choose `amd64/x64` version (Clash for Windows only supports `x64`).
- macOS: Intel chips choose x64; Apple chips (M1/M2/M3) choose `arm64/aarch64`. To use Clash for Windows on Mac, switch to native clients (such as [ClashX](/en/clashx)/[Clash Verge](/en/clash-verge)).
- Android: Most are `arm64-v8a` (i.e., `arm64`); some older devices are `armeabi-v7a` (armv7).
- Linux servers: `x86_64` choose `amd64`; Raspberry Pi and other ARM devices choose `arm64/armv7` based on model.

## After installing Clash client, computer can't access internet on startup?
One of Clash's most common issues - this is caused by the Clash kernel not shutting down properly. Simply re-enable the proxy.

## Proxy is enabled but still can't access internet?
1) Not connected to the internet - check if Baidu is accessible
2) Routing rule issues - rules don't cover certain sites, causing direct connection failures or slow access. Solution: Modify routing rules. Read "[What is Rule-Based Routing?](/en/guide#what-is-rule-based-routing)"
3) Node issues - switch nodes or contact your how-choose-service provider
4) Try enabling TUN mode
