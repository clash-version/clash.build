---
title: Clash 分流规则入门 | 规则是什么？怎么实现智能分流？
description: 零基础搞懂 Clash 分流规则的工作原理。解释什么是规则、策略组、规则集，以及为什么有些网站走代理有些不走。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash规则,Clash分流,Clash策略组,Clash规则集,Clash配置教程,Clash智能分流
---

# Clash 分流规则

说白了，分流规则就是让流量按你定的规则选择出口。这篇文章用最简单的方式待你解锁流量分流。

## 为什么需要对流量进行分流？

- **节省流量：** 如果分流做的好能给你节省很大部分流量，假设不分流，那么不管你访问淘宝还是Google都会消耗你的节点流量，按道理访问淘宝直连就行，根本不需要代理
- **访问速度：** 同样的道理，如果在不分流的情况，你选择一个美国节点，那么你的流量会经过美国再回到国内，流量绕了一大圈，甚至导致国内网站无法访问。
- **上网留痕：** 在不分流的情况下在美国的节点上访问国内网站会记录访问地址是美国，可能导致你的节点IP暴露（虽然不会有太大影响）。

如果你会分流，你就能掌控流量的走向。

## 规则长什么样？

打开你的 Clash 配置文件，往下翻会看到类似这样的内容：

```yaml
rules:
  # 这条规则的意思是：访问 google.com 走 Proxy 代理
  - DOMAIN-SUFFIX,google.com,Proxy
  
  # 这条规则的意思是：访问 baidu.com 直连，不走代理
  - DOMAIN-SUFFIX,baidu.com,DIRECT
  
  # 这条规则的意思是：局域网 IP 直连
  - IP-CIDR,192.168.0.0/16,DIRECT
  
  # 最后一条：上面都不匹配的，走 Proxy
  - MATCH,Proxy
```


## 规则有哪些类型？

规则的组成是：规则类型+关键字+节点或策略组

### DOMAIN - 域名精确匹配

<!-- 以这个为例，DOMAIN是规则类型，www.google.com是关键字，Proxy是策略组，当你访问 `www.google.com`时，流量出口是Proxy-->

```yaml
- DOMAIN,www.google.com,Proxy
```

只匹配 `www.google.com`，不匹配 `mail.google.com`。

### DOMAIN-SUFFIX - 域名后缀匹配

```yaml
- DOMAIN-SUFFIX,google.com,Proxy
```

匹配所有以 `google.com` 结尾的域名，包括 `www.google.com`、`mail.google.com` 等。

### DOMAIN-KEYWORD - 域名关键词匹配

```yaml
- DOMAIN-KEYWORD,google,Proxy
```

域名中包含 `google` 就匹配。

### IP-CIDR - IP 地址段匹配

```yaml
- IP-CIDR,91.108.0.0/16,Proxy
```

适用于某些服务没有固定域名、或使用 IP 直连的情况。比如 Telegram 就经常用 IP 直连，所以需要 IP 规则来匹配。

### GEOIP - 按国家/地区匹配

```yaml
- GEOIP,CN,DIRECT
```

中国大陆的 IP 地址直连。

### MATCH - 兜底规则

<!-- 这条规则有点特殊，上面所有规则都不匹配时，执行这条。通常放在最后。-->

```yaml
- MATCH,Proxy
```

## 什么是策略组？

上面规则里的 `Proxy`、`DIRECT` 是什么？它们叫做「策略」或「策略组」。去看看[深入了解策略组](/proxy-groups)

- `DIRECT` - 直连，不走代理
- `REJECT` - 拒绝连接（用来屏蔽广告）
- `Proxy` - 你配置的代理节点或节点组

### 常见策略组类型

| 策略组类型 | 作用 | 适合场景 |
|:---|:---|:---|
| `select` | 手动选择节点 | 想自己控制用哪个节点，比如看 Netflix 选美国节点 |
| `url-test` | 自动选最快的节点 | 懒人必备，让 Clash 自动帮你选延迟最低的 |
| `fallback` | 故障转移，挂了自动切换 | 节点不稳定时用，自动切到能用的节点 |
| `load-balance` | 负载均衡 | 多个节点轮流用，分散流量避免单点压力 |

---

## 规则匹配顺序

**重要：规则是从上到下依次匹配的！**

```yaml
rules:
  - DOMAIN,special.google.com,DIRECT    # ① 先检查这条
  - DOMAIN-SUFFIX,google.com,Proxy      # ② 再检查这条
  - MATCH,Proxy                          # ③ 最后兜底
```

访问 `special.google.com` 时：
1. 先匹配到第 ① 条 → 直连
2. 不会继续往下匹配了

访问 `www.google.com` 时：
1. 第 ① 条不匹配
2. 匹配到第 ② 条 → 走代理

---

## 什么是规则集 (Rule Provider)？

一个网站一条规则太麻烦了，所以有人整理好了「规则集」，一次性包含几千条规则。

```yaml
rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://xxx/reject.yaml"
    
rules:
  - RULE-SET,reject,REJECT
```

### 常用规则集推荐

```
rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  icloud:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
    path: ./ruleset/icloud.yaml
    interval: 86400

  apple:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
    path: ./ruleset/apple.yaml
    interval: 86400

  google:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
    path: ./ruleset/google.yaml
    interval: 86400

  pxy:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
    path: ./ruleset/proxy.yaml
    interval: 86400

  direct:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

  private:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
    path: ./ruleset/private.yaml
    interval: 86400

  gfw:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
    path: ./ruleset/gfw.yaml
    interval: 86400

  tld-not-cn:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
    path: ./ruleset/tld-not-cn.yaml
    interval: 86400

  telegramcidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
    path: ./ruleset/telegramcidr.yaml
    interval: 86400

  cncidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
    path: ./ruleset/cncidr.yaml
    interval: 86400

  lancidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
    path: ./ruleset/lancidr.yaml
    interval: 86400

  applications:
    type: http
    behavior: classical
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
    path: ./ruleset/applications.yaml
    interval: 86400
```
设置流量走向这是白名单模式 

```
rules:
  - RULE-SET,applications,DIRECT
  - DOMAIN,clash.razord.top,DIRECT
  - DOMAIN,yacd.haishan.me,DIRECT
  - RULE-SET,private,DIRECT
  - RULE-SET,reject,REJECT
  - RULE-SET,icloud,DIRECT
  - RULE-SET,apple,DIRECT
  - RULE-SET,google,Proxy
  - RULE-SET,pxy,Proxy
  - RULE-SET,direct,Proxy
  - RULE-SET,lancidr,DIRECT
  - RULE-SET,cncidr,DIRECT
  - RULE-SET,telegramcidr,Proxy
  - GEOIP,LAN,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,Proxy
```


## 我需要自己写规则吗？

**不需要**。

订阅给你的订阅配置里通常已经包含了完善的规则，能覆盖 90% 以上的使用场景。

什么情况下需要自己写规则？

- **某个网站被漏掉了**：比如一个小众网站，规则集没收录，你需要手动添加
- **想让某个网站走特定节点**：比如 Netflix 想走美国节点，游戏想走日本节点
- **公司内网或特殊网段**：需要直连的内部服务，规则集不可能知道


## 常见问题

### Q: 某个网站明明应该走代理，但是直连了？

规则集没有收录这个网站。解决方法：

在配置文件的 `rules` 部分**最前面**添加一条规则：

```yaml
rules:
  - DOMAIN-SUFFIX,example.com,Proxy  # 添加这行
  # ... 其他规则
```

注意要加在前面，因为规则是从上到下匹配的。

### Q: 规则太多会不会影响速度？

几乎不会。现代设备处理几万条规则也就几毫秒的事，完全感知不到。放心用规则集，别为了「优化」删规则。

### Q: 怎么查看某个网站匹配了哪条规则？

大多数 Clash 客户端都有「连接」或「日志」页面，可以看到每个连接匹配了哪条规则：

- **Clash Verge**：点击「连接」标签页
- **ClashX**：菜单栏图标 → 显示日志
- **Clash for Windows**：点击「Connections」

日志里会显示类似 `[Rule] DOMAIN-SUFFIX,google.com,Proxy` 的信息。

## 相关教程

- [代理模式详解](/proxy-modes) - 全局/规则/直连模式
- [Clash 配置文件详解](/config-file) - 配置文件结构
