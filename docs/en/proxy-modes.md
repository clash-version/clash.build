---
title: Clash Proxy Modes Explained | Global vs Rule vs Direct
description: Detailed explanation of Clash's three proxy modes (Global, Rule, Direct) and when to use each. Essential guide for beginners to choose the right proxy mode.
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash proxy modes,Clash global mode,Clash rule mode,Clash direct mode,Clash mode switching
---

# Clash Proxy Modes Explained

When you first start using Clash, you'll see three mode buttons on the main interface: **Global**, **Rule**, and **Direct**. Which one should you choose? This article will help you understand.

## Quick Summary

> **Use "Rule Mode" for daily use.** Global is for special situations, Direct is basically turning off proxy.

---

## The Three Modes

### 🌐 Global Mode

**What is Global Mode?**

All traffic goes through the proxy server, regardless of whether it's a domestic or foreign website.

**When to Use:**

- Testing if your proxy is working at all
- When accessing a site that's incorrectly categorized as "domestic"
- Temporarily bypassing all rules

**Problems with Global Mode:**

- Domestic websites become slower (unnecessary routing)
- Wastes proxy traffic
- Some domestic services may not work properly

---

### 📋 Rule Mode - Recommended

**What is Rule Mode?**

Automatically determines routing based on preset rules: foreign sites go through proxy, domestic sites connect directly. This is Clash's most powerful feature.

**How Does Routing Work?**

Your configuration file contains a rule list, for example:
- Accessing google.com → Go through proxy
- Accessing baidu.com → Direct connection
- Accessing netflix.com → Go through proxy

**When to Use:**

- Daily use (recommended)
- Best balance of speed and functionality

**Why is Rule Mode Recommended?**

- Smart routing saves proxy traffic
- Domestic sites remain fast
- Only traffic that needs proxy uses proxy

---

### 🔌 Direct Mode

**What is Direct Mode?**

All traffic bypasses proxy, equivalent to disabling Clash's proxy function (but Clash is still running).

**When to Use:**

- Temporarily disabling proxy
- Troubleshooting network issues
- Testing if issues are proxy-related

---

## Visual Comparison

```
┌─────────────────────────────────────────────────────┐
│                    Your Device                       │
└─────────────────────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
     ┌─────────┐   ┌──────────┐   ┌──────────┐
     │ Global  │   │   Rule   │   │  Direct  │
     │  Mode   │   │   Mode   │   │   Mode   │
     └────┬────┘   └────┬─────┘   └────┬─────┘
          │              │              │
          ▼              ▼              ▼
    All → Proxy    Smart Route    All → Direct
```

---

## FAQ

### Q: Can I switch modes while connected?
Yes, you can switch modes at any time. The change takes effect immediately.

### Q: Which mode uses the least proxy traffic?
Rule Mode, because only foreign sites use the proxy.

### Q: Why does Global Mode make domestic sites slow?
Because all traffic is routed through your proxy server (usually overseas), adding latency to domestic requests.

---

## Related Tutorials

- [Troubleshooting Guide](/en/troubleshooting) - Common issues
- [How to Choose a Provider](/en/how-choose-service) - Finding good providers
