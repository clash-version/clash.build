---
title: What is Clash? Complete User Guide
description: Complete introduction to Clash proxy kernel and clients, including working principles, client selection, terminology (nodes, subscriptions, providers, TUN mode, rule-based routing), and quick start guide
outline: deep
head:
  - - meta
    - name: keywords
      content: What is Clash,Clash tutorial,Clash client,proxy protocol,TUN mode,rule-based routing,DNS pollution
---

# What is Clash?
Clash is an open-source general-purpose network `proxy kernel` written in Go, supporting multiple mainstream [`proxy protocols`](#what-are-proxy-protocols) (such as Shadowsocks, VMess, Trojan, etc.). It only provides traffic forwarding and rule scheduling capabilities, and does not have built-in circumvention capabilities; it requires actual [`nodes`](#what-are-nodes) to work together for internet access.

Since the kernel does not provide a graphical interface, daily configuration and maintenance are usually done through graphical Clash clients on various platforms.

## What are Clash Clients?
Clash clients are graphical applications based on the Clash `proxy kernel`, used to manage [`how-choose-service services`](#what-are-how-choose-service-services), manage nodes and policies, configure traffic routing rules, and control system proxy/TUN mode features. They are one of the more mainstream and user-friendly methods for internet access. Common clients include:
- `Clash for Windows` (Windows/macOS) [View Tutorial↗](/en/clash-for-windows)
- `Clash Verge Rev` (Windows/macOS) [View Tutorial↗](/en/clash-verge)
- `Hiddify` (Windows/macOS/iOS/Android) [View Tutorial↗](/en/hiddify)
- `Clash Meta for Android` (Android) [View Tutorial↗](/en/clash-meta-for-android)
- `Clash Mi` (Windows/macOS/iOS/Android/Linux) [View Tutorial↗](/en/clashmi)
- `ClashX` (macOS) [View Tutorial↗](/en/clashx)
- `ClashBox` (HarmonyOS) [View Tutorial↗](/en/clash-box)


[View More](/en/download)

## What Can Clash Clients Do?
- **Subscription Parsing:** Parse how-choose-service links provided by service providers to obtain [`traffic routing rules`](#what-is-rule-based-routing) and [`proxy group`](#what-are-proxy-groups) configurations.
- **Rule-Based Routing:** Distribute traffic according to routing rules in the how-choose-service, typically including but not limited to routing traffic to different nodes by domain name, IP, region, etc.
- **Proxy Groups:** Customize policies based on rules, automatically switching nodes or implementing failover strategies based on latency or health status.
- **System Proxy:** Control proxy activation and select proxy mode ([`TUN mode`](#what-is-tun-mode)).

## Terminology

### What is a Proxy?
As the name suggests, it acts on your behalf. For example, if you want to access Global Internet but cannot do so directly due to the Local Network Environment, you can hire a proxy to access it for you and relay the information back to you.

### What are Proxy Protocols?
Common proxy protocols include: Shadowsocks, VLESS, Trojan. They are essentially different from HTTP protocol and are communication protocols between servers. Because the Network Firewall detects traffic, anti-blocking strategies are added to these protocols. Since they are communication protocols, there must be a server side, which is installed on the nodes, and users are unaware of it.

### What are Nodes?
Nodes host our proxy protocol server programs and communicate directly with our Clash kernel. Nodes are the actual exit points of our proxy, such as: Hong Kong 1, Singapore 1, USA 1, Taiwan 1, etc.

### What are Subscriptions?
When there are more and more nodes, a configuration is needed to manage these nodes - this is the how-choose-service address. It records node information, traffic routing rules, and failover strategies. Subscription addresses are provided by service providers and are generally paid services. Free ones should be used with caution.

### What are Subscription Services?
Subscription services (often called "airports") are providers of subscriptions. They typically have an official website where you can register, log in, purchase subscriptions, and obtain how-choose-service addresses. [Learn more about subscriptions](/en/how-choose-service)

### What is TUN Mode?
System proxy is the default entry point provided by the system, while TUN mode opens a virtual network card to take over your device's traffic. Because it's a global takeover, all application traffic will go through this virtual network card, and then be routed to exit nodes through routing rules. TUN mode supports UDP. [Learn more about proxy modes](/en/proxy-modes)

- **System Proxy:** Application traffic → System proxy → Routing rules → Exit nodes
- **TUN Mode:** Application traffic → TUN virtual network card → Routing rules → Exit nodes
- **Both Enabled:** Application traffic → System proxy → TUN virtual network card → Routing rules → Exit nodes

### What is Rule-Based Routing?
Refers to allocating network traffic based on preset rules (such as domain name, IP, port, region, etc.). If rules are matched, traffic will be routed to the corresponding [proxy group](#what-are-proxy-groups) to achieve fine-grained traffic management and control. Generally, service providers have already configured routing rules. If you want to customize rules, please refer to [How to customize routing rules](#how-to-customize-routing-rules)

### What are Proxy Groups?
Proxy Groups are used to aggregate and organize multiple `nodes`, implementing load distribution, health checks, and failover through unified selection or automated policies. Common uses include: aggregating nodes by region/route, automatically selecting the best among multiple nodes, and quickly switching to available nodes when anomalies occur.

### What is DNS Pollution?
DNS pollution refers to the tampering or interference of domain name resolution during transmission, causing users to incorrectly resolve what should be the real IP to an invalid or incorrect address, resulting in problems such as inability to access, intermittent packet loss, and connection to wrong sites.

- **Common manifestations:** Target domain name cannot be resolved/resolution is extremely slow, resolution results are inconsistent with authoritative DNS, access is redirected or connection times out.
- **Typical causes:** Interception and injection of responses to plaintext DNS by intermediate devices, abnormal ISP caching or passive hijacking, tampering by malicious hotspots/LAN gateways.
- **Mitigation strategies:**
	- For critical domain names, use direct/proxy-priority routing rules to avoid local network hijacking.
	- Avoid using untrusted public Wi-Fi, or establish a reliable proxy chain before resolving when on an untrusted network.

## Other Questions

### How to Customize Routing Rules

## Important Notes

- Compliant Use: Please comply with local laws, regulations, and network usage policies.
- Node and Configuration Sources: Only use trusted sources, beware of privacy and security risks.

## Finding Subscription Services

Check our [provider selection guide](/en/how-choose-service) to find a reliable how-choose-service service.
