---
title: Clash 游戏加速教程 | Steam/Epic/PS/Xbox/Switch 加速配置
description: 使用 Clash 加速游戏的完整教程，包括 Steam、Epic、PlayStation、Xbox、Switch 等平台的代理配置方法。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash游戏加速,Steam加速,游戏代理,PS加速,Xbox加速,Switch加速
---

# Clash 游戏加速教程

用 Clash 玩外服游戏、加速 Steam 下载、降低游戏延迟。

---

## 游戏加速原理

中国到海外游戏服务器的默认路由跳数多、拥塞严重，民间出口优先级低。代理加速的本质是：你的电脑 → 节点服务器（高质量线路）→ 游戏服务器，路中跳数更优、丢包更少、默认优先级更高，延迟反而会下降。

但并不是所有代理都能加速游戏，需满足三个条件：

- **出口质量高**：IPLC、IEPL 专线最佳，质量佳者 BGP 中转次之，隔壁老王家的纯购机房加不了游戏
- **支持 UDP 转发**：绝大多数游戏使用 UDP，只加速 TCP 会导致游戏连不上或不走代理
- **TUN 模式**：Steam、战网等游戏平台不会读系统代理设置，必须用 TUN 模式接管全部流量

---

## ⚠️ 重要提示

- **游戏加速 ≠ 网页代理**：网页代理只需 HTTP/HTTPS（TCP），游戏需 TCP+UDP。许多代理默认不转发 UDP，需要手动启用。
- **TUN 模式是必须的**：Steam、Battle.net、Origin 、游戏本体往往不走 HTTP 代理设置。只有开启 TUN 模式（虚拟网卡）Clash 才能接管这些进程的所有流量。参考 [虚拟网卡 (TUN) 模式](/virtual-network-card)。
- **使用内核需为 Mihomo / Clash Meta**：原版 Clash Premium 已停更，建议使用 Clash Verge Rev、Clash.Meta 、FlClash 等基于 Mihomo 内核的客户端，对 UDP、TUN 支持更好。

---

## Steam 加速

### 下载加速

Steam 下载走的是 CDN（`steamcontent.com`），不是 Steam 商店本身。加速下载要点：

1. 在 Steam 设置 → 下载 → 下载区域，切换到带宽充裕的区域（如 “香港”、“日本 - 东京”，避开「中国 - 上海」这种拥挤区域）
2. 让 Steam 下载流量走代理（走 TUN 模式）
3. 有充足带宽的机场走专线（十几 MB/s 以上轻鬆达到）

### 社区/商店加速

Steam 社区、商店（`steamcommunity.com`、`store.steampowered.com`）被大陆 GFW 部分拦截，需走代理。下载 CDN 默认不需走代理，否则会压缩机场流量。

### 分流规则

```yaml
proxy-groups:
  - name: Steam下载
    type: select
    proxies: [DIRECT, 香港-专线, 日本-专线]
  - name: Steam社区
    type: select
    proxies: [自动选择, 香港-专线, DIRECT]

rules:
  # Steam CDN（下载）
  - DOMAIN-SUFFIX,steamcontent.com,Steam下载
  - DOMAIN-SUFFIX,steamstatic.com,Steam下载
  - DOMAIN-SUFFIX,akamaihd.net,Steam下载
  # Steam 商店与社区
  - DOMAIN-SUFFIX,steampowered.com,Steam社区
  - DOMAIN-SUFFIX,steamcommunity.com,Steam社区
  - DOMAIN-SUFFIX,steamgames.com,Steam社区
```

---

## Epic Games 加速

Epic 启动器本身及商店访问从大陆走默认路由常会报错「Epic Games 启动器不可用」。推荐 TUN 模式 + 以下分流规则：

```yaml
rules:
  - DOMAIN-SUFFIX,epicgames.com,Epic
  - DOMAIN-SUFFIX,unrealengine.com,Epic
  - DOMAIN-SUFFIX,unrealengine.net,Epic
  - DOMAIN-SUFFIX,helpshift.com,Epic
  - DOMAIN-SUFFIX,easyanticheat.net,Epic
```

下载使用专线节点下载速度与本地运营商带宽接近，常被用来领取每周免费游戏。

---

## PlayStation（PS4/PS5）

### 方案一：路由器代理

在路由器上部署 OpenClash / Clash for OpenWRT（需 TUN 模式 + UDP 转发全开）是推荐方案：

- PSN 商店、免费游戏领取、PS Plus 下载全部走代理
- 联机对战（如 FF14、GT Sport）可以走香港、日本专线降低延迟

详细配置参考 [路由器全屋代理](/use-cases/whole-house) 与 [OpenClash 教程](/openclash)。

### 方案二：电脑共享代理

如果不方便动路由器，可以使用 Windows / macOS 电脑作為中转：

1. 电脑连上 Wi-Fi，开启 Clash 的 TUN 模式
2. 使用电脑创建热点或连接网线，开启「网络共享」
3. PS 设备连接这个热点 / 网线即可走代理

### PSN 商店加速规则

路由器上可以加以下分流规则（避免 PS 服务全部走代理导致误报区域）：

```yaml
rules:
  - DOMAIN-SUFFIX,playstation.com,PSN
  - DOMAIN-SUFFIX,playstation.net,PSN
  - DOMAIN-SUFFIX,sonyentertainmentnetwork.com,PSN
  - DOMAIN-SUFFIX,playstationnetwork.com,PSN
  - DOMAIN-SUFFIX,scea.com,PSN
```

---

## Xbox 加速

Xbox Live、Game Pass 下载与 PS 模式一致，推荐路由器代理。常用域名：

```yaml
rules:
  - DOMAIN-SUFFIX,xbox.com,Xbox
  - DOMAIN-SUFFIX,xboxlive.com,Xbox
  - DOMAIN-SUFFIX,xboxlive.cn,Xbox
  - DOMAIN-SUFFIX,gamepass.com,Xbox
  - DOMAIN-SUFFIX,xbcstatic.com,Xbox
```

Game Pass 购买与充值必须在账号所在区域 IP 下进行，否则会提示「区域不匹配」拒付。

---

## Nintendo Switch

Switch 只能设置 HTTP 代理（不能设 SOCKS5），且对代理证书验证严格，不推荐直接使用 Clash 的 HTTP 端口。推荐两种方案：

1. **路由器代理**（首选）：在路由器设置 Switch 的 IP 走 OpenClash 路由，全部流量透明代理。下载、eShop、联机都能加速。
2. **电脑热点**：Switch 连接电脑热点 + 电脑开 TUN，同上。

Switch 联机起际要求低（上下行 5Mbps 即可），但对包损敏感，需选丢包率 < 1% 的节点。

---

## PC 游戏通用配置

### TUN 模式配置

Steam、战网、Riot 启动器等大部分游戏平台都不读系统代理设置（可能是反作弊机制避免被拦截）。必须开 TUN 模式才能走代理。常见客户端中的名称差异：

- Clash Verge / Clash.Meta：「TUN 模式」
- Clash for Windows：「TAP 模式」或「Service Mode」
- FlClash：「虚拟网卡」或「TUN」

开启后需以管理员身份运行。

### UDP 转发

游戏几乎都使用 UDP（FPS、MOBA、MMO 联机）。设置：

```yaml
proxies:
  - name: 香港-专线
    type: ss / vmess / vless / trojan
    udp: true   # 重要：必须为 true
    # ...其他配置
```

如果机场提供的节点默认不启 UDP，可以在本地手动加 `udp: true`。但服务器端不支持的话仅改客户端无效。

### 低延迟节点选择

不要看节点名，看实测。竞技游戏推荐：

- **亚服（香港 / 台湾）**：IPLC 香港节点可达 30-50ms
- **日服**：选东京节点专线（电信 CN2 约 60ms）
- **美服**：选洛杉矶、西雅图节点（CN2 GIA 约 150ms）
- **欧服**：选俄罗斯、法克福中转（部分机场有欧洲专线可控制在 200ms）

避开「负载均衡」类策略组——联机越中频繁切 IP 会被服务器踢下线。

---

## 常见游戏分流规则

### 暴雪游戏（Battle.net）

```yaml
rules:
  - DOMAIN-SUFFIX,battle.net,Game
  - DOMAIN-SUFFIX,battlenet.com,Game
  - DOMAIN-SUFFIX,battlenet.com.cn,Game
  - DOMAIN-SUFFIX,blizzard.com,Game
  - DOMAIN-SUFFIX,blz-contentstack.com,Game
  - DOMAIN-KEYWORD,blzddist,Game
```

### EA / Origin

```yaml
rules:
  - DOMAIN-SUFFIX,ea.com,Game
  - DOMAIN-SUFFIX,origin.com,Game
  - DOMAIN-SUFFIX,dm.origin.com,Game
  - DOMAIN-SUFFIX,akamai.com,Game
  - DOMAIN-KEYWORD,electronicarts,Game
```

### Ubisoft

```yaml
rules:
  - DOMAIN-SUFFIX,ubi.com,Game
  - DOMAIN-SUFFIX,ubisoft.com,Game
  - DOMAIN-SUFFIX,ubisoftconnect.com,Game
  - DOMAIN-SUFFIX,ubistatic-a.akamaihd.net,Game
```

### Riot Games（LOL/Valorant）

```yaml
rules:
  - DOMAIN-SUFFIX,riotgames.com,Game
  - DOMAIN-SUFFIX,leagueoflegends.com,Game
  - DOMAIN-SUFFIX,playvalorant.com,Game
  - DOMAIN-SUFFIX,riotcdn.net,Game
```

::: warning Valorant / LOL 反作弊
这类游戏的反作弊系统（Vanguard、PB等）会检测虚拟网卡、代理程序，可能封号。建议：只走“联机服务访问“使用代理，实际联机阶段切回直连。
:::

---

## 常见问题

### Q: 为什么开了代理游戏反而更卡？

三个可能：

1. 节点质量差（机房节点、带宽拥挤）→ 换专线节点
2. 节点不支持 UDP，游戏包被丢 → 启用 UDP 节点
3. 未开 TUN 模式，游戏部分流量走代理、部分走直连造成路径不一致 → 开 TUN

### Q: 游戏检测到 VPN 被封号怎么办？

- 避开使用严格反作弊（Riot Vanguard 、Easy Anti-Cheat）的联机游戏同路由器走代理
- 需加速时单独为启动器、商店设分流规则，实际游戏进程走 DIRECT
- 已被封号只能联系客服申诉，不要同账号同设备重复被检测

### Q: 如何测试游戏延迟？

- Clash 客户端面板里的「测试延迟」按钮测的是 HTTP（到 Cloudflare/谷歌）延迟，仅供参考
- 真实联机延迟以游戏内显示为准
- 或者在终端 `ping <节点服务器 IP>`，调后多换几个线路对比

---

## 相关教程

- [代理模式详解](/proxy-modes) - TUN 模式说明
- [分流规则入门](/clash-rules-explained) - 自定义规则
- [故障排查](/troubleshooting) - 连接问题
