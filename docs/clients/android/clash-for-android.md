---
title: Clash for Android (CFA) 下载与安装教程 | 安卓老版本备用
description: Clash for Android (CFA) 原版客户端下载与安装教程。虽然该项目已停止维护，但对于部分旧设备仍可使用。推荐升级至支持新协议的 Clash Meta for Android。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash for Android,CFA,Clash安卓原版,Clash Android下载,安卓科学上网,Clash旧版
---

# Clash for Android 下载与安装教程 (已停止维护)

**Clash for Android (CFA)** 是由开发者 Kr328 创建的经典 Clash 安卓客户端。该项目已于 2023 年末停止更新，目前仅作为备用。

::: danger ⚠️ 停止维护警告
**Clash for Android 原版已停止所有更新与维护。**
它不支持 VLESS, Hysteria2 等新一代抗封锁协议。为了更好的网络体验与安全性，**强烈推荐使用官方继任版本：**
👉 **[Clash Meta for Android (点击下载)](/clash-meta-for-android)**
:::

## Clash for Android 下载 (备用存档)

| 平台 | 版本 | 代理加速下载 | GitHub 直连 | 
| :--- | :--- | :--- | :--- | 
| **Android** | `2.5.12` | [高速下载](https://github.clash.guide/clash-clients/cfa-2.5.12-premium-universal-release.apk) | [官方下载](https://github.com/clash-version/clash-for-android/releases/download/v2.5.12/cfa-2.5.12-premium-universal-release.apk) | 


## 安装与迁移指南

### 1、安装应用

- 如果您正在使用鸿蒙系统，请考虑鸿蒙专属的手机端 **[Clash Box](/clash-box)**。
- 如果您的服务商使用了 VLESS 等新协议，此版本将**无法联网**，请必须下载 [Meta 版](/clash-meta-for-android)。

### 2、获取配置

::: tip ⚠️重要提示：
请注意`Clash for Android`是一个代理工具，并非代理订阅。安装完成并不能直接网络加速。
它就好比飞机，需要[`跑道`](/guide#什么是订阅？)才能起飞。市面上的订阅(订阅)五花八门各显神通，如果你对订阅选择一无所知可以读一下[如何选择适合自己的订阅↗](/how-choose-service)这篇博客。
:::



### 3、导入订阅

- 打开 App，点击 `订阅` (Profiles)。
- 点击右上角 `+` 号 -> `从 URL 导入`。
- 粘贴订阅链接并保存。

<Gallery :images='[
  { src: "/images/clash-meta-for-android/copy-install1.png", alt: "Clash for Android 订阅导入流程 1" },
  { src: "/images/clash-meta-for-android/copy-install2.png", alt: "Clash for Android 订阅导入流程 2" }
]' />


### 4、开启代理

- 返回主界面，点击 `已停止` 开关即可启动。
<Gallery :images='[
  { src: "/images/clash-meta-for-android/copy-install6.png", alt: "Clash for Android 开启代理" },
  { src: "/images/clash-meta-for-android/install-latest.png", alt: "Clash for Android 运行状态" }
]' />

---

## 📚 相关教程与资源

### 强烈推荐升级方案
- [Clash Meta for Android](/clash-meta-for-android) - **首选推荐**，功能最强
- [Clash Box](/clash-box) - 鸿蒙系统 HarmonyOS 专属
- [Hiddify](/hiddify-android) - 全平台通用，界面好看
- [查看所有客户端](/download)

### 常见问题
- [安装包解析错误？](/troubleshooting) - 可能是安卓版本太低
- [无法联网？](/troubleshooting) - 可能是协议不支持，请升级客户端

::: tip 💡 为什么不推荐 Clash for Android 原版？
1. ❌ **已停止维护** - 2023年后无更新,无安全补丁
2. ❌ **协议支持落后** - 不支持新协议(VLESS、Hysteria2等)
3. ❌ **社区不活跃** - 问题无人解答, bug无人修复
4. ✅ **替代方案更好** - [Clash Meta for Android](/clash-meta-for-android) 完全兼容,功能更强
:::
如果你是 Clash 新手，建议先阅读 [什么是Clash?](/guide) 了解核心概念，然后跟随 [快速开始指南](/quickly/install) 进行实操。
:::
