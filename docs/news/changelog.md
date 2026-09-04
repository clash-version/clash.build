---
title: Clash 更新日志 | Mihomo 内核更新历史
description: Clash/Mihomo 内核及主流客户端的更新日志汇总，追踪最新功能、Bug修复和安全更新。
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash更新,Mihomo更新,Clash Verge更新,Clash最新版本
---

# Clash 生态更新日志

追踪 Clash 生态的最新动态，第一时间了解新功能和重要更新。

::: tip 📅 页面更新时间
**2026年2月16日** - 本页面定期手动更新，如需最新信息请访问各项目 GitHub Release 页面
:::

---

## 📢 重要公告

| 日期 | 事件 |
|:---|:---|
| 2026.01 | Clash Verge Rev v2.4.5 正式发布，修复大量 Bug |
| 2026.02 | Mihomo v1.19.20 发布，修复安全漏洞 CVE-2025-68121 |

---

## Mihomo 内核

> Mihomo 是目前最活跃的 Clash 内核分支，原名 Clash.Meta。

### 最新版本：v1.19.20

**更新日期：** 2026年2月上旬

**主要更新：**
- 🔒 修复安全漏洞 CVE-2025-68121 (crypto/tls)
- ✨ 新增 `query-server-name` 配置项支持 ECH
- 🐛 修复 hy2 listener 在 http/https masquerade 时的 panic
- 🔧 支持 DoT 连接复用
- 📦 代码清理和性能优化

[查看完整更新日志 →](https://github.com/MetaCubeX/mihomo/releases)

---

## Clash Verge Rev

### 最新版本：v2.4.5

**更新日期：** 2026年1月25日

**主要更新：**
- 🐛 修复 macOS 有线网络 DNS 劫持失败
- 🐛 修复 Monaco 编辑器右键菜单显示异常
- 🐛 修复 Windows 系统主题同步问题
- 🐛 修复 URL Schemes 无法正常导入
- 🐛 修复 Linux 下无法安装 TUN 服务
- ⬆️ 内置 Mihomo 内核升级至 v1.19.19

::: warning 升级提示
macOS 和 Linux 用户需要先卸载旧版 TUN 服务再安装新版本
:::

[查看完整更新日志 →](https://github.com/clash-verge-rev/clash-verge-rev/releases)

---

## FlClash

### 最新版本：v0.8.92

**更新日期：** 2026年2月初

**主要更新：**
- ✨ 新增 SQLite 存储支持
- 🚀 优化 Android 快捷操作
- 💾 优化备份和恢复功能
- 🔧 多项细节优化

[查看完整更新日志 →](https://github.com/chen08209/FlClash/releases)

---

## Clash Meta for Android

### 最新版本：v2.11.23

**更新日期：** 2026年2月上旬

**主要更新：**
- ⬆️ 同步更新 Mihomo 内核依赖
- 🐛 常规 Bug 修复和稳定性改进

[查看完整更新日志 →](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)

---

## 历史大事记

| 时间 | 事件 | 影响 |
|:---|:---|:---|
| 2023.11 | Clash for Windows 停止开发 | 最流行的 Windows 客户端停更，用户需迁移到其他客户端 |
| 2023.11 | Clash 原作者删库 | 原始 Clash 内核仓库被删除，引发社区震动 |
| 2023.11 | Mihomo 社区接手 | Clash.Meta 更名为 Mihomo，继续维护和开发 |
| 2024.01 | Clash Verge Rev 接力 | 社区 Fork 并持续维护，成为新的主流客户端 |
| 2024.03 | FlClash 崛起 | 基于 Flutter 的全平台客户端逐渐成熟 |

---

## 订阅更新通知

想第一时间获取更新通知？

- ⭐ Star 各项目 GitHub 仓库并开启 Watch
- 📱 关注 [MetaCubeX](https://github.com/MetaCubeX) 组织动态
- 💬 加入各客户端 Telegram 讨论群

---

## 相关链接

- [客户端下载](/download) - 下载最新版本
- [快速入门](/guide) - 新手使用教程
- [配置文件详解](/config-file) - 深入理解配置
- [常见问题](/troubleshooting) - 遇到问题先看这里
