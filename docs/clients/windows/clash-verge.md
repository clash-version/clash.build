---
title: Clash Verge 下载与安装教程
description: Clash Verge Rev 跨平台客户端安装教程，支持 Windows/macOS/Linux 系统，基于 Tauri 开发，提供配置管理、TUN模式、IPv6配置等完整指南
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash Verge,Clash Verge Rev,Clash跨平台,Clash Linux,Clash Verge下载,Clash Verge教程
---

# Clash Verge Rev (Clash 最佳替代) 汉化下载与订阅指南

一个基于 Tauri 的现代 GUI 客户端，跨平台设计，可以运行在 Windows、macOS 和 Linux 系统上，目前Clash Verge已经停更，推荐替换成更为稳定的后继版本Clash Verge Rev.

[官方仓库↗](https://github.com/clash-verge-rev/clash-verge-rev/releases/tag/v2.4.2)

## Clash Verge 下载

| 平台 | 版本 | 代理加速 | GitHub直连 | 
| --- | --- | --- | --- | 
| **Windows** | `2.3.1` | [下载](https://github.clash.guide/clash-clients/Clash.Verge_2.4.2_x64-setup.exe) | [下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_x64-setup.exe) | 
| **MacOS** | `2.3.1` | [下载](https://github.clash.guide/clash-clients/Clash.Verge_2.4.2_aarch64.dmg) | [下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge_2.4.2_aarch64.dmg) | 
| **Linux** | `2.3.1` | [下载](https://github.clash.guide/clash-clients/Clash.Verge-2.4.2-1.x86_64.rpm) | [下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.2/Clash.Verge-2.4.2-1.x86_64.rpm) | 

::: tip 提示：
代理加速：通过跳板机代理Github地址加速访问GitHub，如果GitHub直连太慢的话可以尝试`代理加速`下载
::: 

## 安装步骤

### 1、安装应用

- 与Github仓库可能存在延迟更新，如果想体验最新的版本，可以访问Github[官方仓库↗](https://github.com/clash-verge-rev/clash-verge-rev/releases)

- 如果上面下载列表中没有您CUP架构的版本，可以访问他们[官方仓库↗](https://github.com/chen08209/FlClash/releases)


### 2、获取订阅

::: tip ⚠️重要提示：
请注意`Clash Verge`是一个代理工具，并非代理服务商。安装完成并不能直接网络加速。
它就好比飞机，需要[`跑道`](/guide#什么是订阅？)才能起飞。市面上的订阅(订阅)五花八门各显神通，如果你对订阅选择一无所知可以读一下[如何选择适合自己的订阅↗](/how-choose-service)这篇文章。
:::





### 3、导入订阅

- 粘贴订阅地址
- 点击下载订阅
![Clash Verge 订阅导入流程](/images/clash-verge/install1.webp)
![Clash Verge 订阅导入流程](/images/clash-verge/install2.webp)


### 4、开启代理

- 点击开启代理即可
![Clash Verge 订阅导入流程](/images/clash-verge/install3.webp)


## 进阶教程

### 开启TUN模式
::: tip ⚠️提示：
开启前请先阅读《[什么是TUN模式？](/guide#什么是TUN模式？)》
:::
![Clash Verge 订阅导入流程](/images/clash-verge/start-tun.webp)

### 开启IPv6
::: tip ⚠️提示：
IPv6 需要自身网络支持，检查本地网络见下方《怎么检查本地网络是否支持IPv6？》
:::
![Clash Verge 订阅导入流程](/images/clash-verge/start-ipv6.webp)

**怎么检查本地网络是否支持IPv6？**

如果你的宽带/路由器/本机已开启 IPv6，可以用以下方式快速验证：

- 快速网页检测（零订阅）
	- 打开 https://test-ipv6.com/ 或 https://ipv6-test.com/ 页面分数大于 0 且显示 IPv6 地址即为可用。
	- 访问 https://ipw.cn/ 或 https://ifconfig.co/ 能看到公网 IPv6 地址（形如 2001:... 或 240e:...）代表已连通。

**IPv6 不可用情况：**

1. 运营商/区域未开通 IPv6：联系 ISP 开通，或更换支持 IPv6 的网络。
2. 路由器未启用 IPv6：在路由器管理页开启 IPv6（Native/动态前缀/前缀委派）。
3. 仅内网有 ULA/链路本地地址（fe80::/10），无公网前缀：需 ISP 分配前缀或开启前缀委派（PD）。
4. DNS 无 AAAA 解析：将 DNS 更换为支持 IPv6 的公共 DNS，例如：
	 - Cloudflare：2606:4700:4700::1111 / 2606:4700:4700::1001
	 - Google：2001:4860:4860::8888 / 2001:4860:4860::8844
	 - 114DNS（IPv6）：240c::6666 / 240c::6644
5. 公司/校园网策略禁用了 IPv6：遵循本地网络策略，或改用支持 IPv6 的网络环境。

### 服务器可用性测试

![Clash Verge 订阅导入流程](/images/clash-verge/node-test.webp)

---

## 📚 相关教程与资源

### 替代客户端推荐
- [FlClash](/flclash) - 轻量级、资源占用少、跨平台
- [Hiddify](/hiddify) - 全平台通用客户端、协议支持完整
- [Clash for Windows](/clash-for-windows) - Windows经典客户端（已停更）
- [ClashX](/clashx) - macOS 原生客户端
- [查看所有客户端](/download)

### 快速入门指南
- [Clash完整介绍](/guide) - 理解代理概念和术语
- [安装教程](/quickly/install) - 一步步设置指南
- [订阅导入](/quickly/import) - 订阅管理详解
- [高级设置](/quickly/settings) - TUN模式、IPv6优化
- [节点选择](/quickly/select-node) - 如何选择最快节点

### 常见问题解答
- [故障排查指南](/troubleshooting) - 故障排除与解决方案
- [订阅推荐](/how-choose-service) - 订阅对比
- [全局/规则/直连模式区别](/proxy-modes)
- [TUN模式详解](/guide#什么是TUN模式？)
- [规则分流说明](/guide#什么是规则分流？)

::: tip 💡 推荐阅读
如果你是Clash新手，建议先阅读 [什么是Clash?](/guide) 了解核心概念，然后跟随 [快速开始指南](/quickly/install) 进行实操。
:::
