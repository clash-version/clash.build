---
title: Clash 极简分流规则订阅下载
description: 一个实用的 Clash 基础订阅文件模板（config.yaml），包含 DNS 优化、Fake-IP 设置与常用分流规则，适用于 Clash for Windows, Clash Verge 等客户端。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash规则,Clash订阅模板,Clash分流规则,Fake-IP订阅,Clash yaml下载,Clash DNS设置
---

# Clash 极简分流规则订阅

本文提供一个经过优化的 Clash 基础订阅文件模板，包含 DNS 防污染设置、Fake-IP 模式优化以及基础的分流规则。你可以基于此模板修改你的节点信息。

## 订阅文件模板

```yaml
mixed-port: 7890
socks-port: 7891
redir-port: 7892
allow-lan: true
mode: global
log-level: info
external-controller: 127.0.0.1:9090
dns:
  enable: true
  use-hosts: true
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  default-nameserver:
    - 1.1.1.1
    - 8.8.8.8
  nameserver:
    - 1.1.1.1
    - 8.8.8.8
  fake-ip-filter:
    - "*.lan"
    - stun.*.*.*
    - stun.*.*
    - time.windows.com
    - time.nist.gov
    - time.apple.com
    - time.asia.apple.com
    - "*.openwrt.pool.ntp.org"
    - pool.ntp.org
    - ntp.ubuntu.com
    - time1.apple.com
    - time2.apple.com
    - time3.apple.com
    - time4.apple.com
    - time5.apple.com
    - time6.apple.com
    - time7.apple.com
    - time1.google.com
    - time2.google.com
    - time3.google.com
    - time4.google.com
    - api.joox.com
    - joox.com
    - "*.xiami.com"
    - "*.msftconnecttest.com"
    - "*.msftncsi.com"
    - "+.xboxlive.com"
    - "*.*.stun.playstation.net"
    - xbox.*.*.microsoft.com
    - "*.ipv6.microsoft.com"
    - speedtest.cros.wr.pvp.net

proxies: # LEAVE THIS LINE!

proxy-groups:
  - name: 🚀 节点选择
    type: select
    include-all: true
    proxies:
      - ♻️ 自动选择

  - name: ♻️ 自动选择
    type: url-test
    include-all: true
    exclude-filter: (?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|用户|官网
    url: https://www.gstatic.com/generate_204
    interval: 300
    tolerance: 60

rules:
  - GEOSITE,private,DIRECT
  - GEOSITE,category-ir,DIRECT
  - GEOSITE,cn,DIRECT
  - GEOSITE,category-ru,DIRECT
  - GEOIP,private,DIRECT,no-resolve
  - GEOIP,ir,DIRECT,no-resolve
  - GEOIP,cn,DIRECT,no-resolve
  - GEOIP,ru,DIRECT,no-resolve
  - MATCH,🚀 节点选择
```

## 使用说明

1. **添加节点**：此订阅文件的 `proxies` 为空（标记为 `# LEAVE THIS LINE!`），你需要手动填写 `proxies` 节点信息，或者配合支持 `include-all` 乃至 Provider 的客户端使用。
2. **策略组**：订阅了「自动选择」策略组，会自动选择延迟最低的节点。
3. **GeoIP/GeoSite**：使用了 Meta 内核特有的 GEOSITE 规则，请确保你的客户端内核支持（Clash Meta / Mihomo）。

::: tip 💡 提示
如果你使用的是 Clash for Windows 原版内核，可能不支持 `GEOSITE` 规则，建议改为标准的 `DOMAIN-SUFFIX` 等规则或更换内核。
:::