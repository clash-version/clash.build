---
title: Clash 策略组详解 | 什么是策略组？怎么配置？
description: 零基础搞懂 Clash 策略组的工作原理。详解 select、url-test、fallback、load-balance 四种策略组类型，附带完整配置示例。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash策略组,Clash代理组,Clash select,Clash url-test,Clash fallback,Clash负载均衡,Clash配置教程
---

# Clash 策略组详解

策略组是 Clash 的核心功能之一，它决定了你的「上网方式」。这篇文章帮你彻底搞懂策略组。

## 什么是策略组？

说白了就是上网方式，如果你不在乎节点质量，选择`url-test`，它会自动选择可用节点，如果想节点不通时候自动切换选择`fallback`，每个节点均衡消耗选择`load-balance`，固定某个节点选择`select`

- `select`：指哪打哪，高度自定义
- `url-test`： 程序自动选择节点
- `fallback`：节点挂了自动切换
- `load-balance`：每个节流量均衡消耗

## 策略组长什么样？

打开配置文件，找到 `proxy-groups` 部分：

```yaml
proxy-groups:
  - name: "🚀 节点选择"
    type: select
    proxies:
      - 香港01
      - 香港02
      - 日本01
      - 美国01
```

这就是一个最简单的策略组：
- `name` - 策略组的名字，会显示在客户端里
- `type` - 选择方式（select/url-test/fallback/load-balance）
- `proxies` - 包含哪些节点

## 四种策略组类型

### 1. select - 手动选择

```yaml
proxy-groups:
  - name: "🚀 节点选择"
    type: select
    proxies:
      - 香港01
      - 香港02
      - 日本01
      - 美国01
      - DIRECT
```

**特点：** 你自己决定用哪个节点，Clash 不会自动切换。

**适合场景：**
- 看 Netflix 想指定用美国节点
- 玩日服游戏想用日本节点
- 某些网站只能用特定地区节点

**使用方法：** 在 Clash 客户端的「代理」页面点击切换。

### 2. url-test - 自动测速选最快

```yaml
proxy-groups:
  - name: "⚡ 自动选择"
    type: url-test
    proxies:
      - 香港01
      - 香港02
      - 日本01
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
```

**参数说明：**
| 参数 | 作用 | 建议值 |
|:---|:---|:---|
| `url` | 测速用的网址 | `http://www.gstatic.com/generate_204` |
| `interval` | 多久测一次（秒） | 300（5分钟） |
| `tolerance` | 容差，延迟差多少才切换（毫秒） | 50 |

**特点：** Clash 定期测速，自动切换到最快的节点。

**适合场景：**
- 懒得手动选节点
- 节点经常波动，想自动切到快的
- 日常上网，对地区没特殊要求

**注意：** `tolerance` 设置太小会频繁切换，建议 50ms 以上。

### 3. fallback - 故障转移

```yaml
proxy-groups:
  - name: "🛡️ 故障转移"
    type: fallback
    proxies:
      - 香港01
      - 香港02
      - 日本01
    url: http://www.gstatic.com/generate_204
    interval: 300
```

**特点：** 按顺序使用节点，第一个挂了自动切到第二个，以此类推。

**和 url-test 的区别：**
- `url-test`：选最快的
- `fallback`：选第一个能用的（按顺序）

**适合场景：**
- 有主力节点，但需要备用
- 节点不稳定，需要自动切换保证可用性
- 不想频繁切换节点

### 4. load-balance - 负载均衡

```yaml
proxy-groups:
  - name: "⚖️ 负载均衡"
    type: load-balance
    proxies:
      - 香港01
      - 香港02
      - 香港03
    url: http://www.gstatic.com/generate_204
    interval: 300
    strategy: consistent-hashing
```

**策略类型：**
| strategy | 说明 |
|:---|:---|
| `consistent-hashing` | 相同域名走同一节点（推荐） |
| `round-robin` | 轮流使用每个节点 |

**特点：** 流量分散到多个节点，避免单点压力过大。

**适合场景：**
- 有多个同地区节点
- 单个节点带宽不够
- 想分散流量避免被风控

一般用户很少需要，日常使用 `select` 或 `url-test` 就够了。

## 策略组嵌套

策略组可以嵌套，实现更灵活的分流：

```yaml
proxy-groups:
  # 总入口
  - name: "🚀 节点选择"
    type: select
    proxies:
      - ⚡ 自动选择    # 嵌套另一个策略组
      - 🇭🇰 香港节点
      - 🇯🇵 日本节点
      - 🇺🇸 美国节点
      - DIRECT

  # 自动选择组
  - name: "⚡ 自动选择"
    type: url-test
    proxies:
      - 香港01
      - 香港02
      - 日本01
    url: http://www.gstatic.com/generate_204
    interval: 300

  # 香港节点组
  - name: "🇭🇰 香港节点"
    type: select
    proxies:
      - 香港01
      - 香港02

  # 日本节点组
  - name: "🇯🇵 日本节点"
    type: select
    proxies:
      - 日本01
      - 日本02

  # 美国节点组
  - name: "🇺🇸 美国节点"
    type: select
    proxies:
      - 美国01
      - 美国02
```

这样配置后，你可以：
1. 日常用「自动选择」，让 Clash 帮你选
2. 看 Netflix 切到「美国节点」
3. 玩游戏切到「日本节点」

## 实战：按地区分组

订阅通常已经帮你分好组了。如果想自己配置，可以参考：

```yaml
proxy-groups:
  # 主选择器
  - name: "🚀 节点选择"
    type: select
    proxies:
      - ⚡ 自动选择
      - 🇭🇰 香港
      - 🇹🇼 台湾
      - 🇯🇵 日本
      - 🇸🇬 新加坡
      - 🇺🇸 美国
      - DIRECT

  # 自动测速
  - name: "⚡ 自动选择"
    type: url-test
    use:
      - all-proxies      # 引用所有节点
    url: http://www.gstatic.com/generate_204
    interval: 300

  # 按地区分组（用 filter 过滤）
  - name: "🇭🇰 香港"
    type: url-test
    use:
      - all-proxies
    filter: "(?i)香港|HK|Hong"
    url: http://www.gstatic.com/generate_204
    interval: 300

  - name: "🇹🇼 台湾"
    type: url-test
    use:
      - all-proxies
    filter: "(?i)台湾|TW|Taiwan"
    url: http://www.gstatic.com/generate_204
    interval: 300

  - name: "🇯🇵 日本"
    type: url-test
    use:
      - all-proxies
    filter: "(?i)日本|JP|Japan"
    url: http://www.gstatic.com/generate_204
    interval: 300

  - name: "🇸🇬 新加坡"
    type: url-test
    use:
      - all-proxies
    filter: "(?i)新加坡|SG|Singapore"
    url: http://www.gstatic.com/generate_204
    interval: 300

  - name: "🇺🇸 美国"
    type: url-test
    use:
      - all-proxies
    filter: "(?i)美国|US|United States"
    url: http://www.gstatic.com/generate_204
    interval: 300

# 节点提供者（从订阅获取）
proxy-providers:
  all-proxies:
    type: http
    url: "你的订阅地址"
    path: ./proxies/all.yaml
    interval: 3600
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 300
```

**关键点：**
- `use` - 引用 proxy-providers 中的节点
- `filter` - 用正则表达式过滤节点名（`(?i)` 表示不区分大小写）

## 策略组与规则的配合

策略组定义好后，在规则里引用：

```yaml
rules:
  - DOMAIN-SUFFIX,google.com,🚀 节点选择
  - DOMAIN-SUFFIX,netflix.com,🇺🇸 美国
  - DOMAIN-SUFFIX,dmm.co.jp,🇯🇵 日本
  - GEOIP,CN,DIRECT
  - MATCH,🚀 节点选择
```

这样就实现了：
- Google 走「节点选择」（你可以手动切换）
- Netflix 强制走「美国」节点
- DMM 强制走「日本」节点
- 国内网站直连
- 其他都走「节点选择」

## 常见问题

### Q: 策略组名字可以用中文吗？

可以。建议用 emoji + 中文，这样在客户端里更直观，比如：
- `🚀 节点选择`
- `🇭🇰 香港节点`
- `📺 流媒体`

### Q: url-test 测速地址用哪个好？

推荐使用：
```
http://www.gstatic.com/generate_204
```
这是 Google 的测速地址，返回快、稳定。

其他可选：
- `http://cp.cloudflare.com/generate_204` - Cloudflare
- `http://www.google.com/generate_204` - Google 备用

### Q: 节点太多，客户端很卡怎么办？

1. 减少 `url-test` 组里的节点数量
2. 增大 `interval` 测速间隔（比如 600 秒）
3. 按地区分组，每组只放几个节点

### Q: 订阅已经有策略组了，还需要自己配吗？

不需要。订阅给的配置通常已经分好组了，直接用就行。

只有以下情况才需要自己改：
- 想自定义分流规则
- 想合并多个订阅的节点
- 对默认分组不满意

## 相关教程

- [分流规则入门](/clash-rules-explained) - 搞懂规则怎么写
- [代理模式详解](/proxy-modes) - 全局/规则/直连模式
- [配置文件详解](/config-file) - 完整配置结构
