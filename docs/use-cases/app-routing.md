---
title: Clash 应用分流教程 | 指定应用走代理/直连
description: 如何让指定应用走代理或直连？本教程教你配置 Clash 的应用分流，包括微信直连、游戏直连、浏览器走代理等场景。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash应用分流,指定应用代理,微信直连,进程分流,应用规则
---

# Clash 应用分流教程

想让微信直连、游戏直连、只有浏览器走代理？这篇教程教你配置。

---

## 什么是应用分流？

默认情况下 Clash 按「目标域名 / IP」判定走代理还是直连。但有时你希望按「哪个应用发起的请求」来判定——比如让微信/游戏走直连以避免被风控，只让浏览器/特定工具走代理。这就是**应用分流**（进程分流 / Process Routing）。

Clash Premium 内核不支持，但 **Mihomo / Clash Meta 内核**（Clash Verge、FlClash、Clash.Meta 都使用该内核）提供了 `PROCESS-NAME` 、`PROCESS-PATH` 规则类型。

---

## 配置方法

### 方法一：进程名匹配（推荐）

Windows / macOS / Linux 上推荐使用 `PROCESS-NAME`（进程名，带后缀），仅需 Mihomo 内核 + TUN 模式即可生效：

```yaml
rules:
  # 进程名规则示例
  - PROCESS-NAME,WeChat.exe,DIRECT
  - PROCESS-NAME,QQ.exe,DIRECT
  - PROCESS-NAME,steam.exe,DIRECT
  - PROCESS-NAME,chrome.exe,Proxy
  - PROCESS-NAME,Code.exe,Proxy
```

还可以用 `PROCESS-PATH`（完整路径，避免同名程序误匹配）：

```yaml
rules:
  - PROCESS-PATH,C:\Program Files\Tencent\WeChat\WeChat.exe,DIRECT
```

### 方法二：TUN 模式排除特定应用

如果不想用规则表达，可以在 TUN 模式设置里加入「进程白名单 / 黑名单」：

- **黑名单**（不接管）：该进程走原生网络，不进 TUN，适合让微信、游戏变成直连
- **白名单**（只接管）：仅该应用走 TUN，其他都走原生网络，适合只让浏览器走代理

Clash Verge、FlClash 都提供了 GUI 设置面板，mihomo 原型配置中为：

```yaml
tun:
  enable: true
  stack: mixed
  # 黑名单：这些进程不进 TUN
  exclude-package:
    - com.tencent.mm
    - com.netease.cloudmusic
```

::: warning macOS / iOS 限制
macOS 上 `PROCESS-NAME` 需要 root 权限（在 Clash Verge 里表现为「安装/修复服务」）；Sandbox 应用（如 App Store 下载的应用）能匹配进程名。iOS 受系统限制，不支持进程分流。
:::

---

## 常见应用配置

### 微信直连

```yaml
rules:
  # Windows
  - PROCESS-NAME,WeChat.exe,DIRECT
  - PROCESS-NAME,WeChatAppEx.exe,DIRECT
  # macOS
  - PROCESS-NAME,WeChat,DIRECT
  - PROCESS-NAME,WeChatAppEx,DIRECT
  # Android（mihomo 内核，使用包名）
  - PROCESS-NAME,com.tencent.mm,DIRECT
```

### QQ 直连

```yaml
rules:
  - PROCESS-NAME,QQ.exe,DIRECT
  - PROCESS-NAME,TIM.exe,DIRECT
  - PROCESS-NAME,QQ,DIRECT
  - PROCESS-NAME,com.tencent.mobileqq,DIRECT
```

### 网易云音乐直连

```yaml
rules:
  - PROCESS-NAME,cloudmusic.exe,DIRECT
  - PROCESS-NAME,NeteaseMusic,DIRECT
  - PROCESS-NAME,com.netease.cloudmusic,DIRECT
```

### 游戏直连

```yaml
rules:
  - PROCESS-NAME,WeGameLauncher.exe,DIRECT
  - PROCESS-NAME,LeagueClient.exe,DIRECT
  - PROCESS-NAME,Genshin Impact.exe,DIRECT
  - PROCESS-NAME,YuanShen.exe,DIRECT
  - PROCESS-NAME,GenshinImpact.exe,DIRECT
```

### 只让浏览器走代理

```yaml
rules:
  - PROCESS-NAME,chrome.exe,Proxy
  - PROCESS-NAME,msedge.exe,Proxy
  - PROCESS-NAME,firefox.exe,Proxy
  - PROCESS-NAME,Safari,Proxy
  - PROCESS-NAME,Google Chrome,Proxy
  # 其他全部直连
  - MATCH,DIRECT
```

---

## 各客户端配置方法

### Clash Verge

1. 设置 → 透明代理 → 开启 TUN 模式（需安装/启动服务）
2. 「设置 → 内核」选 `mihomo`（默认已选）
3. 在「配置」里点击「编辑 Mihomo Profile」，加入 PROCESS-NAME 规则即可生效
4. 不想改配置文件的话，可在「设置 → 透明代理 → 进程黑/白名单」里勾选

### FlClash

1. “设置→虚拟网卡”启动 TUN
2. “应用分流”里可以为每个安装的应用独立切换：默认代理 / 仅代理 / 不代理，无需手写规则
3. Android 端也可同样使用。需 Android 7 及以上

### Clash for Windows

原版 CFW 使用 Premium 内核，不支持 PROCESS-NAME 规则。如需进程分流，在「General → Service Mode + TAP 模式」下使用「Mixin」文件插入 mihomo 兼容语法，或直接切换到 Clash Verge / FlClash。

---

## 常见问题

### Q: 为什么配置了规则没生效？

依次检查：

1. 内核是不是 Mihomo / Clash Meta（Premium 内核不支持）
2. 是否开启 TUN / Service 模式（仅系统代理模式下许多应用不走 Clash，拿不到进程信息）
3. 进程名拼写、大小写是否与实际一致（Windows 需带 .exe，macOS 不带后缀）
4. 规则是否被靠上面的其他规则提前命中——`PROCESS-NAME` 需要靠前放

### Q: 怎么知道应用的进程名？

- **Windows**：任务管理器 → 详细信息 页、看「名称」列，或右键「打开文件所在位置」
- **macOS**：活动监视器 → 进程名称列，或终端 `lsof -i -P | grep LISTEN`
- **Mihomo Dashboard**：连接面板会显示每条连接的进程名与匹配规则，最准确
- **Android**：需要包名，可用 「包名查看器」类 APP 查询

### Q: 域名规则和进程规则哪个优先？

Clash 规则是「从上到下顺序匹配」，谁在前面先命中谁生效，并不是按规则类型优先。推荐顺序：

```yaml
rules:
  - PROCESS-NAME,...,DIRECT      # 进程规则放最上，优先决定
  - DOMAIN-SUFFIX,...,DIRECT     # 准确域名
  - DOMAIN-KEYWORD,...,Proxy     # 关键字
  - GEOIP,CN,DIRECT              # 国内 IP 直连
  - MATCH,Proxy                  # 其余走代理
```

---

## 相关教程

- [分流规则入门](/clash-rules-explained) - 了解规则语法
- [配置文件详解](/config-file) - 完整配置说明
