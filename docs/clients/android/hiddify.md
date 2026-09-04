---
outline: deep
---

# Hiddify Android 下载与安装教程

为数不多完美适配鸿蒙系统的Clash客户端，同样使用clashmeta内核，支持多种代理协议

[官方仓库↗](https://github.com/hiddify/hiddify-next/releases)

## Hiddify Android 下载

| 平台 | 版本 | 代理加速 | GitHub直连 | 
| --- | --- | --- | --- | 
| **Android** | `2.5.7` | [下载](https://github.clash.guide/clash-clients/Hiddify-Android-universal.apk) | [下载](https://github.com/hiddify/hiddify-app/releases/download/v2.5.7/Hiddify-Android-universal.apk) |


::: tip 提示：
代理加速：通过跳板机代理Github地址加速访问GitHub，如果GitHub直连太慢的话可以尝试`代理加速`下载
::: 

## 安装步骤

### 1、安装应用

### 2、获取订阅

::: tip ⚠️重要提示：
请注意`Hiddify Android`是一个代理工具，并非代理订阅。安装完成并不能直接网络加速。
它就好比飞机，需要[`跑道`](/guide#什么是订阅？)才能起飞。市面上的订阅(订阅)五花八门各显神通，如果你对订阅选择一无所知可以读一下[如何选择适合自己的订阅↗](/how-choose-service)这篇博客。
:::




### 3、导入订阅

- 粘贴订阅地址
- 点击下载订阅
- 点击开启代理即可
<Gallery :images='[
  { src: "/images/hiddify-android/install1.webp", alt: "Hiddify Android 订阅导入流程 1" },
  { src: "/images/hiddify-android/install2.webp", alt: "Hiddify Android 订阅导入流程 2" }
]' />

## 进阶教程（可选）

### 开启TUN模式、IPv6
<Gallery :images='[
  { src: "/images/hiddify-android/install2-tun.webp", alt: "Hiddify Android 订阅导入流程 2" },
  { src: "/images/hiddify-android/install3-tun.webp", alt: "Hiddify Android 订阅导入流程 2" }
]' />

## 常见问题

### [配置获取总是失败怎么办？](/troubleshooting#_1-检查订阅是否过期)

### [已开启代理仍然无法上网?](/troubleshooting)

---

## 📚 相关教程与资源

### 其他安卓客户端推荐
- [Clash Meta for Android](/clash-meta-for-android) - 基于 Meta 内核的安卓客户端
- [Clash for Android](/clash-for-android) - 原版客户端（已停更）
- [Clash Box](/clash-box) - 鸿蒙系统专属客户端
- [FlClash](/flclash) - 跨平台轻量级客户端
- [查看所有客户端](/download)

### 桌面端推荐
- [Hiddify](/hiddify) - 全平台通用客户端
- [Clash Verge](/clash-verge) - 跨平台现代客户端

### 快速入门指南
- [Clash完整介绍](/guide) - 理解代理概念和术语
- [安装教程](/quickly/install) - 一步步设置指南
- [订阅导入](/quickly/import) - 订阅管理详解
- [节点选择](/quickly/select-node) - 如何选择最快节点

### 常见问题解答
- [故障排查指南](/troubleshooting) - 故障排除与解决方案
- [订阅推荐](/how-choose-service) - 订阅对比
- [什么是TUN模式？](/guide#什么是TUN模式？)
- [什么是代理协议？](/guide#什么是代理协议？)

::: tip 💡 推荐阅读
如果你是 Clash 新手，建议先阅读 [什么是Clash?](/guide) 了解核心概念，然后跟随 [快速开始指南](/quickly/install) 进行实操。
:::
