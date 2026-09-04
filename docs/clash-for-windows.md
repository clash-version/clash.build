---
title: Clash for Windows 下载与安装教程
description: Clash for Windows (CFW) 完整安装配置教程，支持 Windows/macOS 系统，包含配置导入、服务器配置、TUN模式、IPv6设置等详细步骤，附常见问题解决方案
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash for Windows,CFW,Clash for Windows下载,Clash for Windows教程,CFW安装,Clash代理配置,网络加速Windows
  - - meta
    - property: og:image
      content: https://image.clash.download/clash-for-windows-教程-效果展示.webp
  - - meta
    - name: twitter:image
      content: https://image.clash.download/clash-for-windows-教程-效果展示.webp
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - script
    - type: application/ld+json
    - {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Clash for Windows (CFW) 还在更新吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "不，Clash for Windows 的原作者已于2023年停止更新此项目。本站提供的 v0.20.39 是其在官方 GitHub 仓库发布的最后一个稳定版本。虽然它目前仍可使用，但不会再有新功能添加或针对新出现问题的修复。"
            }
          },
          {
            "@type": "Question",
            "name": "Clash for Windows (CFW) 现在用还安全吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "从官方渠道（如本站提供的 Github 链接）下载的 v0.20.39 版本，软件本身在停止更新前是经过广泛验证的。但由于不再更新，如果其依赖的组件未来爆出新的安全漏洞，将无法得到修补。此外，代理服务的安全性更多取决于您所使用的服务器配置服务商是否可靠。"
            }
          },
          {
            "@type": "Question",
            "name": "我应该继续使用 Clash for Windows 吗？有哪些替代品？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "老用户：如果您已习惯 Clash for Windows 且目前使用一切正常，可以继续使用。\n新用户或追求新功能的用户：更推荐使用仍在积极维护和更新的客户端，例如 Clash Verge 或 FlClash。这些客户端基于较新的 Clash Meta 内核，支持更多现代代理协议，功能也更丰富。"
            }
          },
          {
            "@type": "Question",
            "name": "Clash for Windows (CFW) 和 Clash Verge 有什么主要区别？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1. 内核不同：Clash for Windows 基于较旧的 Clash 核心；而 Clash Verge 基于更新、功能更强大的 Clash Meta (Mihomo) 内核。\n2. 更新状态：Clash for Windows 已停止更新；Clash Verge 持续活跃更新。\n3. 功能特性：得益于 Meta 内核，Clash Verge 支持更多高级功能和更新的代理协议，性能和稳定性方面也可能有优势。\n4. 跨平台：Clash Verge 也有 Mac 和 Linux 版本，而 FlClash 更是支持包括 Android 在内的四大平台。"
            }
          },
          {
            "@type": "Question",
            "name": "为什么我安装 Clash for Windows 后提示“Windows SmartScreen 阻止了无法识别的应用启动”？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "这是 Windows 的一种安全机制，因为 Clash for Windows 的安装包可能没有被广泛数字签名。您可以点击提示框中的“更多信息”，然后选择“仍要运行”即可继续安装。请确保您的安装包是从可信来源（如官方 Github 或本站）下载的。"
            }
          },
          {
            "@type": "Question",
            "name": "为什么打开 Clash for Windows 后界面是英文的？怎么设置中文？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "本站提供的版本是自带简体中文的。如果您打开后是英文界面，通常是因为您的操作系统语言设置影响了软件的默认语言。\n您可以尝试在软件的 Settings (设置) -> General (常规) 选项卡下找到 Language (语言) 选项，手动选择 简体中文，然后重启软件。如果初次启动没有找到语言切换选项，通常它会根据系统语言自动选择，确保您的 Windows 系统语言首选项包含中文。"
            }
          }
        ]
      }
  - - script
    - type: application/ld+json
    - {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Clash for Windows 配置使用教程：五分钟上手指南",
        "description": "本教程将指导您如何在 Windows 或 Mac 系统上下载、安装 Clash for Windows (v0.20.39)，导入服务器配置配置，并开启系统代理，实现网络加速。五分钟包教包会！",
        "totalTime": "PT5M",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "CNY", "value": "0" },
        "supply": [
          { "@type": "HowToSupply", "name": "Clash for Windows 软件 (v0.20.39)" },
          { "@type": "HowToSupply", "name": "Clash 服务器配置地址" }
        ],
        "tool": [
          { "@type": "HowToTool", "name": "电脑 (Windows 或 Mac)" }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "第一步：下载安装并启动 Clash for Windows",
            "text": "访问 Clash for Windows 官方 Github 或本站提供的加速链接，下载对应您操作系统（Windows .exe, Mac .dmg）的 v0.20.39 安装包。下载完成后，运行安装程序并按照提示完成安装。启动 Clash for Windows 应用程序。",
            "url": "#第一步下载安装并启动",
            "image": "https://image.clash.download/clash-for-windows-教程-效果展示.webp"
          },
          {
            "@type": "HowToStep",
            "name": "第二步：获取 Clash 服务器配置",
            "text": "Clash for Windows 本身是代理工具，需要配合 Clash 服务器配置才能连接国际网络。如果您还没有 Clash 配置地址，可以从服务商服务商处购买或寻找免费试用服务器。确保您已复制有效的配置链接。",
            "url": "#clash服务器",
            "image": "https://image.clash.download/clash-for-windows-教程-导入配置.webp"
          },
          {
            "@type": "HowToStep",
            "name": "第三步：导入配置到 Clash for Windows",
            "text": "将获取到的 Clash 配置链接导入到 Clash for Windows 中。具体操作分为一键导入和手动导入两种方式。",
            "url": "#第三步导入配置到clash",
            "itemListElement": [
              {
                "@type": "HowToDirection",
                "name": "一键导入配置",
                "text": "如果您的服务商服务商支持一键导入，通常会提供一个特定的按钮或链接。点击后，Clash for Windows 会自动获取并加载配置文件。",
                "image": "https://image.clash.download/clash-for-windows-教程-导入配置.webp"
              },
              {
                "@type": "HowToDirection",
                "name": "手动下载配置",
                "text": "复制您的 Clash 配置链接。打开 Clash for Windows，在“Profiles”(配置文件) 页面，将配置链接粘贴到顶部的输入框中，然后点击“Download”(下载)。Clash for Windows 会拉取配置文件并显示在列表中。选中刚导入的配置文件使其生效。",
                "image": "https://image.clash.download/clash-for-windows-教程-下载配置.webp"
              }
            ]
          },
          {
            "@type": "HowToStep",
            "name": "第四步：打开系统代理",
            "text": "导航到 Clash for Windows 的“General”(常规) 页面。找到“System Proxy”(系统代理) 选项，并将其开关拨到开启状态。确保开关保持绿色或表示已激活的状态。此时，您的设备网络流量将通过 Clash for Windows 进行代理。",
            "url": "#第四步打开系统代理",
            "image": "https://image.clash.download/clash-for-windows-配置教程-系统代理.webp",
            "result": "成功开启系统代理后，您应该已经可以访问外部网络。可以尝试打开国际互联网等网站进行测试。"
          }
        ]
      }
---

# Clash for Windows 汉化版下载与完整使用图文教程 (2026)

Clash for Windows (CFW) 是一款基于 Clash 核心的图形化网络代理客户端。它并非代理服务提供商，而是一个功能强大的管理工具，能让用户根据高度可定制的规则，智能地分流和管理设备上的所有网络流量。虽然名字中带有 "Windows"，但它实际上是一款跨平台应用，同时支持 macOS 和 Linux 系统。作者已于 2023 年底停止更新并删除了其 GitHub 仓库。尽管旧版本依然可用，但已无官方维护和更新。

[备份仓库↗](https://github.com/clash-version/clash-for-windows)

## Clash for Windows 下载

| 平台 | 版本 | 代理加速 | GitHub直连 | 
| --- | --- | --- | --- | 
| **Windows** | `0.20.39` | [下载](https://github.clash.guide/clash-clients/Clash.for.Windows-0.20.39-win.exe) | [下载](https://github.com/clash-version/clash-for-windows/releases/download/v0.20.39/Clash.for.Windows-0.20.39-win.exe) | 
| **MacOS** | `0.20.39`|  [下载](https://github.clash.guide/clash-clients/clash-for-windows.dmg) | [下载](https://github.com/clash-version/clash-for-windows/releases/download/v0.20.39/clash-for-windows.dmg) | 

::: tip 提示：
代理加速：通过跳板机代理Github地址加速访问GitHub，如果GitHub直连太慢的话可以尝试`代理加速`下载
::: 

## 安装步骤

### 1、安装应用
- 如果您正在使用M系列的苹果电脑，推荐使用macOS原生客户端[ClashX](/clashx)

- 如果您在使用Windows可选的客户端更多，如果安装不上可以尝试其他的客户端，比如：[Clash Verge](/clash-verge)、[FlClash](/flclash)、[Hiddify](/hiddify) 都是非常优秀的开源客户端，我们同样提供详尽的使用教程。

### 2、获取配置

::: tip ⚠️重要提示：
请注意`Clash for Windows`是一个代理工具，并非代理服务商。安装完成并不能直接网络加速。
它就好比飞机，需要[`跑道`](/guide#什么是服务商？)才能起飞。市面上的服务商(配置服务商)五花八门各显神通，如果你对服务商选择一无所知可以读一下[如何选择适合自己的服务商↗](/how-choose-service)这篇博客。
:::




### 3、导入配置
 

- 粘贴配置地址
- 点击下载配置
![Clash for Windows 配置导入流程](/images/clash-for-windows/install1.webp)
![Clash for Windows 配置导入流程](/images/clash-for-windows/install2.webp)


### 4、开启代理

- 点击开启代理即可
![Clash for Windows 配置导入流程](/images/clash-for-windows/install3.webp)

如果找了很多教程资料仍无法上网，这里的建议是更换其他的开源客户端，毕竟你的需求是上网，不是跟它较劲，其他客户端也非常好用，比如Clash Verge、FlClash、Hiddify等
## 进阶教程（可选）

### 开启IPv6
![Clash for Windows 配置导入流程](/images/clash-for-windows/open-ipv6.webp)

### 开启TUN模式
![Clash for Windows 配置导入流程](/images/clash-for-windows/open-tun.webp)

### 服务器可用性测试



## Clash for Windows 常见问题 | CFW 故障排除

### CFW 服务器协议不兼容问题 | Clash for Windows 配置导入失败

![Clash for Windows 配置导入失败 - CFW 服务器协议错误提示界面](/images/clash-for-windows/node-pull-error.webp)

**问题描述：** Clash for Windows 下载配置后报错，无法加载服务器配置。

**原因分析：** CFW v0.20.39 不支持最新的代理协议（如 VLESS、Hysteria2 等），导致配置解析失败。

**解决方案：**
1. ✅ 推荐使用 [Clash Verge](/clash-verge) - 支持最新协议，持续更新
2. ✅ 或使用 [FlClash](/flclash) - 跨平台，协议兼容性好
3. ✅ 或使用 [Hiddify](/hiddify) - 全平台通用解决方案

### CFW macOS 安装失败 | Clash for Windows Mac 兼容性问题

**问题描述：** Clash for Windows 在 macOS 上无法安装或运行。

**原因分析：**
- CFW 仅支持 Intel 芯片的 Mac
- Apple Silicon (M1/M2/M3) 不被官方支持

**解决方案：**
- ✅ M 系列 Mac 用户推荐使用 [ClashX](/clashx) - macOS 原生客户端
- ✅ 或使用 [Clash Verge](/clash-verge) - 支持 Apple Silicon

### Clash for Windows 配置获取失败怎么办？| Clash for Windows 配置问题

**常见 Clash for Windows 配置问题：**

### [已开启代理仍然无法上网?](/troubleshooting)

---

## 📚 相关教程与资源

### 替代客户端推荐
- [Clash Verge](/clash-verge) - 现代化、活跃维护、支持最新协议
- [FlClash](/flclash) - 轻量级、资源占用少
- [Hiddify](/hiddify) - 全平台通用客户端
- [查看所有客户端](/download)

### 快速入门指南
- [Clash完整介绍](/guide) - 理解代理概念和术语
- [安装教程](/quickly/install) - 一步步设置指南
- [配置导入](/quickly/import) - 如何添加和管理配置
- [高级设置](/quickly/settings) - TUN模式、IPv6和优化

### 常见问题
- [故障排查指南](/troubleshooting) - 故障排除与解决方案
- [选择配置服务](/how-choose-service) - 服务商对比和推荐
- [全局、规则、直连模式区别](/proxy-modes)

### 技术深度解读
- [什么是代理协议？](/guide#什么是代理协议？)
- [理解TUN模式](/guide#什么是TUN模式？)
- [规则分流详解](/guide#什么是规则分流？)
- [DNS污染防护](/guide#什么是DNS污染？)

::: tip 💡 推荐阅读
如果你是Clash新手，建议先阅读[Clash是什么？](/guide)了解核心概念，然后跟随[快速开始指南](/quickly/install)进行实操设置。
:::

## 为什么不再推荐Clash for Windows

虽然Clash for Windows曾是最受欢迎的选择，但现在有明显的局限性：

**主要问题:**
1. ❌ **不再维护** - 2023年最后更新，无安全补丁
2. ❌ **协议支持过时** - 无法处理现代代理协议(VLESS、Hysteria2等)
3. ❌ **Mac兼容性问题** - 不支持Apple Silicon Mac
4. ❌ **安全隐患** - 旧Clash内核存在未修复漏洞

**更好的替代方案:**
- **[Clash Verge](/clash-verge)** - 活跃维护、现代UI、完整协议支持
- **[FlClash](/flclash)** - 轻量级、开源、跨平台
- **[Hiddify](/hiddify)** - 全设备通用解决方案


::: warning ⚠️ 重要提示
由于开发已停止，我们建议迁移到活跃维护的替代品，以获得更好的安全性、稳定性和协议支持。查看我们的[客户端对比](https://github.com/clash-forks/clash-download)了解详细推荐。
:::


