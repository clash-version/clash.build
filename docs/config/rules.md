---
title: Clash 分流规则入门 | 规则是什么？怎么实现智能分流？
description: 零基础搞懂 Clash 分流规则的工作原理。解释什么是规则、策略组、规则集，以及为什么有些网站走代理有些不走。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash规则,Clash分流,Clash策略组,Clash规则集,Clash配置教程,Clash智能分流
---

# Clash 分流规则入门：为什么有些网站走代理，有些不走？

用 Clash 的时候你可能注意到：访问 Google 自动走代理，访问淘宝却是直连的。这是怎么做到的？答案就是 **分流规则**。

这篇文章用最简单的方式帮你理解 Clash 规则的工作原理。

---

## 规则是什么？

<!-- 用户填写：用大白话解释 -->

简单说，规则就是一份「名单」，告诉 Clash：
- 遇到这些网站 → 走代理
- 遇到那些网站 → 直连
- 不认识的网站 → 按默认处理

就像你给门卫一份 VIP 名单，告诉他谁能进谁不能进。

---

## 规则长什么样？

<!-- 用户填写：展示实际的规则示例 -->

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

---

## 规则类型详解

### DOMAIN - 域名精确匹配

<!-- 用户填写：解释 + 示例 -->

```yaml
- DOMAIN,www.google.com,Proxy
```

只匹配 `www.google.com`，不匹配 `mail.google.com`。

### DOMAIN-SUFFIX - 域名后缀匹配

<!-- 用户填写：解释 + 示例 -->

```yaml
- DOMAIN-SUFFIX,google.com,Proxy
```

匹配所有以 `google.com` 结尾的域名，包括 `www.google.com`、`mail.google.com` 等。

### DOMAIN-KEYWORD - 域名关键词匹配

<!-- 用户填写：解释 + 示例 -->

```yaml
- DOMAIN-KEYWORD,google,Proxy
```

域名中包含 `google` 就匹配。

### IP-CIDR - IP 地址段匹配

<!-- 用户填写：解释 + 示例 -->

```yaml
- IP-CIDR,91.108.0.0/16,Proxy
```

【填写：什么时候用 IP 规则】

### GEOIP - 按国家/地区匹配

<!-- 用户填写：解释 + 示例 -->

```yaml
- GEOIP,CN,DIRECT
```

中国大陆的 IP 地址直连。

### MATCH - 兜底规则

<!-- 用户填写：解释 -->

```yaml
- MATCH,Proxy
```

上面所有规则都不匹配时，执行这条。通常放在最后。

---

## 什么是策略组？

<!-- 用户填写：用大白话解释策略组 -->

上面规则里的 `Proxy`、`DIRECT` 是什么？它们叫做「策略」或「策略组」。

- `DIRECT` - 直连，不走代理
- `REJECT` - 拒绝连接（用来屏蔽广告）
- `Proxy` - 你配置的代理节点或节点组

### 常见策略组类型

| 策略组类型 | 作用 | 适合场景 |
|:---|:---|:---|
| `select` | 手动选择节点 | 【填写】 |
| `url-test` | 自动选最快的节点 | 【填写】 |
| `fallback` | 故障转移，挂了自动切换 | 【填写】 |
| `load-balance` | 负载均衡 | 【填写】 |

---

## 规则匹配顺序

<!-- 用户填写：解释规则是按顺序匹配的 -->

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

<!-- 用户填写：解释规则集的概念 -->

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

<!-- 用户填写：推荐几个好用的规则集项目 -->

| 规则集名称 | 地址 | 特点 |
|:---|:---|:---|
| 【填写】 | 【填写 GitHub 地址】 | 【填写】 |
| 【填写】 | 【填写 GitHub 地址】 | 【填写】 |

---

## 我需要自己写规则吗？

<!-- 用户填写：给用户建议 -->

大部分情况下 **不需要**。

订阅给你的订阅配置里通常已经包含了完善的规则，能覆盖 90% 以上的使用场景。

只有这些情况你可能需要自己加规则：
- 【填写：场景1】
- 【填写：场景2】

---

## 常见问题

### Q: 某个网站明明应该走代理，但是直连了？

<!-- 用户填写：解答 -->
【填写：可能是规则没覆盖，如何添加自定义规则】

### Q: 规则太多会不会影响速度？

<!-- 用户填写：解答 -->
【填写：现代设备影响可忽略】

### Q: 怎么查看某个网站匹配了哪条规则？

<!-- 用户填写：解答，比如看日志 -->
【填写：如何查看 Clash 日志】

---

## 相关教程

- [代理模式详解](/proxy-modes) - 全局/规则/直连模式
- [Clash 配置文件详解](/config-file) - 配置文件结构
