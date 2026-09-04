---
title: Clash 订阅文件 config.yaml 全面详解
description: 从零开始编写 Clash 订阅文件，包含基础设置、DNS优化、节点策略组订阅及规则分流语法详解，适合进阶用户与定制化需求。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash订阅,config.yaml,Clash语法,Rule-Provider,分流规则,Clash DNS订阅,Clash教程
---

# Clash 订阅文件 config.yaml 全面详解

Clash 的强大之处在于其高度可定制化的订阅系统。无论是开源内核（Clash Premium/Meta）还是各类 GUI 客户端（Clash for Windows, Clash Verge 等），其核心运行逻辑都由 `config.yaml` 文件决定。

掌握订阅文件的编写，可以让你精确控制网络流量的走向，实现广告拦截、国内外分流、故障自动切换等高级功能。

::: tip 💡 提示
Clash 订阅文件采用 **YAML** 语法。YAML 对缩进非常敏感，**必须使用空格进行缩进（通常是 2 个空格），严禁使用 Tab 键**。
:::

## 1. 基础设置 (General)

这部分订阅决定了 Clash 的基本运行行为，如监听端口、允许局域网连接、日志级别等。

```yaml
# HTTP(S) 代理端口
port: 7890

# SOCKS5 代理端口
socks-port: 7891

# 混合端口（HTTP 和 SOCKS5 共用一个端口），通常推荐使用这个，替代上面两个
mixed-port: 7890

# 允许局域网其他设备连接（手机/电视盒子连电脑代理需开启此项）
allow-lan: true

# 绑定 IP，仅当 allow-lan 为 true 时生效
# '*' 表示绑定所有网卡，也可以指定特定 IP 如 192.168.1.100
bind-address: '*'

# 运行模式
# rule: 规则模式（最常用，根据规则决定流量走向）
# global: 全局模式（所有流量走代理）
# direct: 直连模式（所有流量不走代理）
mode: rule

# 日志级别
# info / warning / error / debug / silent
log-level: info

# 是否开启 IPv6 支持
ipv6: false

# 外部控制控制器（API），主要用于面板控制（如 Dashboard）
external-controller: 127.0.0.1:9090

# 外部控制器的访问密钥（可选）
secret: ""
```

## 2. DNS 订阅 (DNS)

DNS 是 Clash 订阅中最复杂也是最关键的部分。错误的 DNS 订阅会导致国内网站访问慢、无法访问，或者 DNS 污染。

```yaml
dns:
  # 是否启用 Clash 内置 DNS 节点
  enable: true

  # 监听端口（处理 DNS 请求的端口）
  listen: 0.0.0.0:53

  # 运行模式
  # fake-ip: 返回虚拟 IP，极大提高响应速度，防止 DNS 污染（推荐）
  # redir-host: 真实解析 IP，更传统，但在部分环境下可能较慢
  enhanced-mode: fake-ip

  # Fake-IP 过滤池（这些域名不会返回 Fake-IP，而是真实解析）
  # 通常用于解决部分局域网设备或特定应用无法识别 Fake-IP 的问题
  fake-ip-filter:
    - '*.lan'
    - '*.local'
    - localhost.ptlogin2.qq.com

  # 默认 DNS，用于解析下面 nameserver 中填写的 DoH/DoT 域名的 IP
  # 必须是 IP 形式，尽量使用国内稳定 DNS
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29

  # 主要 DNS 节点
  # Search 过程：Clash 会并发向这里的所有节点发起解析请求
  nameserver:
    - https://doh.pub/dns-query
    - https://dns.alidns.com/dns-query
    
  # 后备 DNS 节点
  # 只有当 nameserver 中的节点解析结果为国外 IP（非 CN）时，
  # 才会采用 fallback 中的解析结果（通常 fallback 填国外 DNS）
  # 逻辑：同时请求 nameserver 和 fallback -> 拿到 nameserver 结果 -> 判断是否为 CN IP -> 是则直接返回，否则等待 fallback 结果
  fallback:
    - https://1.1.1.1/dns-query
    - https://dns.google/dns-query

  # 强制 fallback 的域名
  # 不管 nameserver 结果是不是 CN IP，只要域名匹配列表，就必须等待 fallback 结果
  fallback-filter:
    geoip: true # 只要 nameserver 解析结果的 IP 地理位置显示不是 CN，就采用 fallback 结果
    ipcidr: # 该网段内的 IP 视为污染，强制使用 fallback
      - 240.0.0.0/4
```

## 3. 代理节点 (Proxies)

这里定义具体的代理节点信息。通常由订阅提供订阅自动生成，不建议手动一个个填。但了解格式有助于排查问题。

```yaml
proxies:
  # Shadowsocks 协议示例
  - name: "SS节点"
    type: ss
    server: server.com
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"
    # udp: true

  # VMess 协议示例
  - name: "VMess节点"
    type: vmess
    server: server.com
    port: 443
    uuid: "uuid-string"
    alterId: 0
    cipher: auto
    # network: ws
    # ws-opts:
    #   path: /path
    #   headers:
    #     Host: v2ray.com

  # Trojan 协议示例
  - name: "Trojan节点"
    type: trojan
    server: server.com
    port: 443
    password: "password"
    udp: true
    sni: example.com
```

## 4. 代理组 (Proxy Groups)

策略组是 Clash 的灵魂。通过它，你可以将不同的节点“打包”成一种策略，供规则引用。

常见的策略组类型：
1.  **select**: 手动选择。
2.  **url-test**: 自动测速，选择延迟最低的节点。
3.  **fallback**: 故障转移，按顺序检测，第一种挂了自动切第二个。
4.  **load-balance**: 负载均衡。

```yaml
proxy-groups:
  # 1. 节点选择组（手动切换）
  - name: 🚀 节点选择
    type: select
    proxies:
      - ♻️ 自动选择
      - 🇭🇰 香港节点
      - 🇺🇸 美国节点
      - DIRECT # 直连

  # 2. 自动测速组（谁快用谁）
  - name: ♻️ 自动选择
    type: url-test
    url: http://www.gstatic.com/generate_204 # 测试地址
    interval: 300 # 测试间隔（秒）
    tolerance: 50 # 容差（毫秒），新旧节点延迟差大于此值才切换，防止频繁跳跃
    proxies:
      - 🇭🇰 香港节点
      - 🇺🇸 美国节点

  # 3. 这里的节点通常是上面 proxies 里定义的 name
  # 也可以引用其他分组的 name（策略组套娃）
  
  - name: 🍎 苹果服务
    type: select
    proxies:
      - DIRECT
      - 🚀 节点选择
```

## 5. 分流规则 (Rules)

规则决定了访问通过哪个策略组。Clash 按 **从上到下** 的顺序匹配规则，一旦匹配成功即停止。

**基本语法：** `类型,参数,策略组`

```yaml
rules:
  # 1. 域名关键词匹配
  - DOMAIN-KEYWORD,google,🚀 节点选择

  # 2. 域名后缀匹配（最常用）
  - DOMAIN-SUFFIX,youtube.com,🚀 节点选择
  - DOMAIN-SUFFIX,cn,DIRECT # 所有 .cn 结尾的直连

  # 3. 完整域名匹配
  - DOMAIN,www.baidu.com,DIRECT

  # 4. GEOIP 数据库匹配（国家代码）
  # 只有当 DNS 解析结果为 CN IP 时匹配
  # 如果开启了 no-resolve，则不进行 DNS 解析，直接跳过（针对 IP 规则）
  - GEOIP,CN,DIRECT
  - GEOIP,US,🚀 节点选择

  # 5. IP 段匹配
  - IP-CIDR,127.0.0.0/8,DIRECT
  - IP-CIDR,192.168.0.0/16,DIRECT

  # 6. 源 IP 匹配（局域网内特定设备走特定节点）
  - SRC-IP-CIDR,192.168.1.201/32,DIRECT

  # 7. 端口匹配
  - DST-PORT,80,DIRECT

  # 8. 兜底规则（必须放在最后）
  # 上面都没匹配到的，走这个
  - MATCH,🐟 漏网之鱼
```

## 6. 规则集合 (Rule Providers) - 进阶

当规则成千上万条时，写在 `config.yaml` 里会非常臃肿且难以维护。`rule-providers` 允许你引用外部的规则文件（本地或远程），并像策略组一样更新。

```yaml
rule-providers:
  # 定义一个名为 "reject_list" 的规则集
  reject_list:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.list
    interval: 86400 # 自动更新间隔（秒）

  # 定义国内 IP 规则集
  cn_ip:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
    path: ./ruleset/cncidr.list
    interval: 86400

rules:
  # 在 Rules 中引用 Provider
  - RULE-SET,reject_list,REJECT
  - RULE-SET,cn_ip,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,🚀 节点选择
```

## 7. 总结：一个极简的订阅文件结构

如果你想从头手写，可以参考这个最小结构：

```yaml
port: 7890
socks-port: 7891
allow-lan: true
mode: rule
log-level: info
external-controller: :9090

proxies:
  - { name: "Shadowsocks", type: ss, server: 1.2.3.4, port: 8388, cipher: aes-256-gcm, password: "pwd" }

proxy-groups:
  - name: "Proxy"
    type: select
    proxies:
      - "Shadowsocks"

rules:
  - DOMAIN-SUFFIX,google.com,Proxy
  - GEOIP,CN,DIRECT
  - MATCH,Proxy
```

👉 提供一个极简的规则模板：[Clash 极简分流规则订阅](/clash-rules)。

::: warning ⚠️ 注意事项
1. **缩进**：确保层级关系正确，子项缩进两个空格。
2. **冒号**：冒号后面通常要跟一个空格（`key: value`）。
3. **字符集**：确保文件保存为 `UTF-8` 编码，否则中文注释或节点名会乱码。
:::
