---
title: 快速安装示例 | Clash 客户端新手入门指南
description: Clash 客户端快速安装与配置指南。教你如何一步步下载软件、导入订阅配置、开启系统代理，适用于 Windows、macOS 和 Android 等平台的 Clash Verge Rev、FlClashX 等客户端。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash安装手册,Clash配置导入,Clash快速入门,Clash新手指南,Clash Verge Rev安装,如何使用Clash
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Clash Verge Rev",
        "applicationCategory": "NetworkApplication",
        "operatingSystem": "Windows, macOS, Android, Linux",
        "softwareVersion": "0.2.1",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "8000"
        },
        "description": "Clash Verge Rev 是一款基于 Trui 开发的现代化跨平台 Clash 客户端，内置 Mihomo 内核，支持 Windows、macOS、Android 和 Linux 系统，拥有 Material Design 3 界面、TUN 模式及 WebDAV 同步功能。"
      }
---

# 快速安装示例
 以Clash Verge Rev为例, `Clash for Windows`客户端平替，兼容最新协议，界面更美观

<Badge type="tip" text="Windows" />
<Badge type="tip" text="macOS" />
<Badge type="tip" text="Linux" />


**应用预览：**
<div style="display: flex; gap: 10px; justify-content: space-between;">
  <img src="/images/clash-verge-rev/preview-1.webp" alt="Clash Mi 应用预览1" style="width: 49%;" />
  <img src="/images/clash-verge-rev/preview-2.webp" alt="Clash Mi 应用预览2" style="width: 49%;" />
</div>

## 1. 下载安装

以下是 Clash Verge Rev 各版本的下载链接。推荐下载最新版本以获得最佳体验。

| 平台 | <span style="display:inline-block;width:120px">架构</span> | <span style="display:inline-block;width:120px">说明</span> | <span style="display:inline-block;width:60px">官方下载</span> |<span style="display:inline-block;width:60px">加速下载</span> |
| :--- | :--- | :--- | :--- |:--- |
| **Windows** | ![x64](https://img.shields.io/badge/Setup-x64-0078D6?logo=windows&logoColor=white) | **⭐推荐**大多数用户 | [直连下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_x64-setup.exe) |[⚡️高速下载](https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_x64-setup.exe) |
| **macOS** | ![Apple Silicon](https://img.shields.io/badge/DMG-Apple%20Silicon-100000?logo=apple&logoColor=white)| M1/M2/M3 等芯片 | [直连下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_aarch64.dmg) |[⚡️高速下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_aarch64.dmg) |
| | ![Intel](https://img.shields.io/badge/DMG-Intel%20X64-0078D6?logo=apple&logoColor=white) | 旧款 Intel 芯片 Mac | [直连下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_x64.dmg) |[⚡️高速下载](https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_x64.dmg) |
| **Linux** | ![x64](https://img.shields.io/badge/DebPackage-x64-e95420?logo=debian&logoColor=e95420) | `.deb` 包 | [直连下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_amd64.deb) |[⚡️高速下载](https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.4/Clash.Verge_2.4.4_amd64.deb) |
| | ![x64](https://img.shields.io/badge/RpmPackage-x64-c02f33?logo=redhat&logoColor=c02f33) | `.rpm` 包 | [直连下载](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/autobuild/Clash.Verge-2.4.5+autobuild.0112.d2c52d0-1.x86_64.rpm) |[⚡️高速下载](https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/autobuild/Clash.Verge-2.4.5+autobuild.0112.d2c52d0-1.x86_64.rpm) |


> 完整历史版本请访问 [GitHub Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)。