---
title: Hiddify 下载与安装教程
description: Hiddify 全平台代理客户端安装教程，支持 Windows/macOS/iOS/Android/Linux 系统，提供订阅管理、TUN模式、IPv6订阅等完整指南
outline: deep
head:
  - - meta
    - name: keywords
      content: Hiddify,Hiddify下载,Hiddify教程,Hiddify iOS,Hiddify Android,Hiddify订阅
---

# Hiddify 下载与安装教程

Hiddify 是一款跨平台的图形化代理客户端，支持 Windows、macOS、iOS、Android 等平台。基于现代代理内核提供订阅管理、规则分流、策略组以及系统代理/TUN 等能力，适合需要一站式使用体验的用户。

[官方仓库↗](https://github.com/hiddify/hiddify-next/releases)

## Hiddify 下载

| 平台 | 版本 | 代理加速 | GitHub直连 |
| --- | --- | --- | --- |
| **Windows** | `2.5.7` | [下载](https://github.clash.guide/clash-clients/Hiddify-Windows-Setup-x64.exe) | [下载](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Windows-Setup-x64.exe) |
| **macOS** | `2.5.7` | [下载](https://github.clash.guide/clash-clients/Hiddify-MacOS.dmg) | [下载](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-MacOS.dmg) |
| **Android** | `2.5.7` | [下载](https://github.clash.guide/clash-clients/Hiddify-Android-universal.apk) | [下载](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Android-universal.apk) |
| **iOS** | `2.5.7` | [下载](https://github.clash.guide/clash-clients/Hiddify-MacOS-Installer.pkg) | [下载](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-MacOS-Installer.pkg) |
| **Linux** | `2.5.7` |[下载](https://github.clash.guide/clash-clients/Hiddify-Linux-x64.AppImage)|[下载](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Linux-x64.AppImage)|

::: tip 提示：
代理加速：通过跳板机代理 GitHub 地址以加速下载；如果 GitHub 直连较慢，可先试`代理加速`。
:::

## 安装步骤

### 1、安装应用

- 如果上面下载列表中没有您CUP架构的版本，可以访问他们[官方仓库↗](https://github.com/chen08209/FlClash/releases)

- 如遇系统阻止安装（来自未知开发者/驱动权限等），按提示允许或在安全与隐私中放行。

### 2、获取订阅

::: tip ⚠️重要提示：
请注意 `Hiddify` 是一个代理工具，并非代理订阅。安装完成并不能直接网络加速。
它就好比飞机，需要[`跑道`](/guide#什么是订阅？)才能起飞。如果你不清楚如何选择，可以阅读：[如何选择适合自己的订阅↗](/how-choose-service)。
:::




### 3、导入订阅

- 打开 Hiddify，进入订阅/订阅管理页面；
![Hiiddify 订阅导入流程](/images/hiddify/install1.webp)

- 粘贴订阅地址
![Hiiddify 订阅导入流程](/images/hiddify/install2.webp)

- 设置自动更新
![Hiiddify 订阅导入流程](/images/hiddify/install3.webp)
![Hiiddify 订阅导入流程](/images/hiddify/install4.webp)
### 4、开启代理

- 在主界面开启代理”；
![Hiiddify 订阅导入流程](/images/hiddify/install5.webp)

## 进阶教程

### 开启 TUN 模式
开启前建议先了解《[什么是TUN模式？](/guide#什么是tun模式)》。
- Hiddify 中一般在“设置 → 网络/高级/内核”页面开启 TUN/VPN；
- 若提示需要安装/授予权限，请按向导完成；
- 遇到驱动/端口占用问题，尝试重启或关闭其它代理工具后重试。

### 开启 IPv6
请参考《[怎么开启IPv6](/guide#怎么开启ipv6)》。启用后如出现异常解析或连通性问题，可暂时关闭 IPv6 或按需仅对特定规则使用。

## 常见问题

### [配置获取失败怎么办？](/troubleshooting)

### [已开启代理仍然无法上网?](/troubleshooting)

---

## 📚 相关教程与资源

### 替代客户端推荐
- [Clash Verge](/clash-verge) - 跨平台现代客户端，基于 Tauri 开发
- [FlClash](/flclash) - 轻量级跨平台客户端
- [Clash for Windows](/clash-for-windows) - Windows 经典客户端（已停更）
- [ClashX](/clashx) - macOS 原生客户端
- [查看所有客户端](/download)

### 移动端推荐
- [Hiddify Android](/hiddify-android) - 安卓版 Hiddify 客户端
- [Clash Meta for Android](/clash-meta-for-android) - 安卓 Meta 内核客户端


### 快速入门指南
- [Clash完整介绍](/guide) - 理解代理概念和术语
- [安装教程](/quickly/install) - 一步步设置指南
- [订阅导入](/quickly/import) - 订阅管理详解
- [节点选择](/quickly/select-node) - 如何选择最快节点

### 常见问题解答
- [故障排查指南](/troubleshooting) - 故障排除与解决方案
- [订阅推荐](/how-choose-service) - 订阅对比
- [什么是TUN模式？](/guide#什么是TUN模式？)
- [什么是规则分流？](/guide#什么是规则分流？)

::: tip 💡 推荐阅读
如果你是 Clash 新手，建议先阅读 [什么是Clash?](/guide) 了解核心概念，然后跟随 [快速开始指南](/quickly/install) 进行实操。
:::

