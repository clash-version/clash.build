---
title: Clash Troubleshooting Guide | Connection Issues & Solutions
description: Clash not working? Can't connect? Subscription failed? This guide covers the most common Clash issues including system time, expired subscriptions, TUN mode, DNS pollution and solutions.
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash not working,Clash timeout,Clash subscription failed,Clash DNS issues,Clash troubleshooting
---

# Clash Troubleshooting Guide

If you're experiencing **"System proxy enabled but can't access internet"**, **"All nodes timeout"** or **"Baidu works but Google doesn't"**, follow these steps to troubleshoot.

## 🔴 Core Troubleshooting Checklist

### 1. Check Subscription Expiry
This is the most common cause.
- **Symptoms**: All nodes show `Timeout` or red unavailable status.
- **Solution**: Log in to your service provider's website and check if your subscription has expired or traffic has been exhausted.
- **Tip**: Free trial plans usually have short validity periods.

### 2. Check System Time
Clash's encryption protocols (VMess, Trojan) are very sensitive to device time. A time difference of more than 90 seconds will cause connection failures.
- **Symptoms**: Nodes can be pinged but web pages won't open.
- **Solution**: Go to system settings, toggle "Set time automatically" off and on again to sync with standard time.

### 3. Check Mode Selection
- **Global Mode**: Forces all traffic through proxy. If your node is down, even domestic sites won't work.
- **Rule Mode**: Domestic direct, foreign via proxy. **Recommended for daily use**.
- **Direct Mode**: No proxy at all.
- **Troubleshoot**: Make sure you haven't accidentally selected "Direct Mode". Rule Mode is usually recommended.

### 4. Check Port Conflicts
- **Symptoms**: Clash startup error, port (7890/7897) occupied.
- **Solution**:
    - Close other proxy software that might be using the ports.
    - Change port number in Clash settings (e.g., to 7892), then restart Clash.

---

## 🟡 Advanced Troubleshooting

### 5. TUN Mode and System Proxy
- **Problem**: Some applications (UWP apps, games, command line) don't use system proxy.
- **Solution**:
    - Try enabling Clash's **TUN Mode** (requires administrator privileges).
    - Or manually set proxy in terminal: `export all_proxy=http://127.0.0.1:7890`

### 6. DNS Resolution Issues
- **Symptoms**: Telegram works but websites (YouTube) don't open, browser shows `DNS_PROBE_FINISHED_NXDOMAIN`.
- **Solution**:
    - Check if browser has "Secure DNS" (DoH) enabled, try disabling it.
    - Try changing Clash DNS mode to `Fake-IP` (usually better compatibility).
    - Clear local DNS cache (`ipconfig /flushdns` on Windows).

### 7. GeoIP Database Error
- **Symptoms**: Routing doesn't work correctly, domestic sites also go through proxy.
- **Solution**: Find the GeoIP/GeoSite database update button in Clash client settings and click update.

---

## 🟢 Still Can't Fix It?

If you've tried all the above steps and it still doesn't work, it's most likely a **node issue** or **invalid subscription link**.

1. **Try updating subscription**: Right-click subscription list -> Update Subscription.
2. **Try a different provider**: If the provider has shut down or lines are down, there's nothing you can do. Try a backup provider at [Getting Trial Nodes](/en/how-choose-service).
3. **Reset network**: In rare cases, system network settings are corrupted. Try resetting system network settings.
