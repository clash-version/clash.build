---
title: 高级设置指南 | Clash TUN 模式与 IPv6 配置
description: Clash 客户端高级功能使用指南，包括开启 TUN 模式实现虚拟网卡代理、启用 IPv6 支持以及其他性能优化设置。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash TUN模式,Clash IPv6,Clash高级设置,Clash虚拟网卡,Clash全局代理,Clash性能优化
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Clash 高级设置教程",
        "description": "演示如何启用 TUN 模式和 IPv6 等高级功能",
        "step": [
          {
            "@type": "HowToStep",
            "name": "启用 TUN 模式",
            "text": "在设置中找到 TUN 模式选项并开启，实现全局代理",
            "image": "https://openetkit.com/images/clash-verge-rev/open-tun.webp",
            "url": "https://openetkit.com/zh-CN/quickly/settings#1、开启tun模式"
          },
          {
            "@type": "HowToStep",
            "name": "启用 IPv6 支持",
            "text": "开启 IPv6 选项以支持 IPv6 网络访问",
            "image": "https://openetkit.com/images/clash-verge/open-ipv6.webp",
            "url": "https://openetkit.com/zh-CN/quickly/settings#2、开启ipv6"
          }
        ],
        "totalTime": "PT3M"
      }
---

# 其他设置(可选)


### 更新配置文件

![Clash Verge Rev 导入配置2](/images/clash-verge-rev/update-config-1.webp)

### 开启关闭IPv6

![Clash Verge Rev 开启IPv6](/images/clash-verge-rev/open-ipv6.webp)

### 开启全局模式
全局模式下，流量不会分流，所有流量都会走指定的出口（图中选中`HK 1`）

![FlClashX 启动](/images/clash-verge-rev/open-global-1.webp)

### 虚拟网卡模式（Tun模式）

![Clash Verge Rev 开启Tun模式](/images/clash-verge-rev/open-tun.webp)
