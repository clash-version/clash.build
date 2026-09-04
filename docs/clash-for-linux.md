---
title: Clash for Linux 下载与安装教程
description: 基于 nelvko/clash-for-linux-install 的 Linux 一键安装脚本教程，支持 Ubuntu/Debian/CentOS/Arch 等发行版，一键部署 Mihomo/Clash 内核，提供订阅管理、Web 面板、Tun 模式等完整功能
outline: deep
head:
  - - meta
    - name: keywords
      content: Clash for Linux,Linux Clash安装,Mihomo Linux,clash-for-linux-install,Ubuntu Clash,Debian Clash,Linux代理,一键脚本
---

# Clash for Linux 一键安装教程

一套面向 Linux 服务器和桌面的 **命令行管理脚本**，可在常见发行版上一键部署 Mihomo / Clash 内核，提供订阅管理、Web 面板、Tun 模式等功能。

[官方仓库↗](https://github.com/nelvko/clash-for-linux-install)

<Badge type="tip" text="Ubuntu" />
<Badge type="tip" text="Debian" />
<Badge type="tip" text="CentOS" />
<Badge type="tip" text="Arch" />
<Badge type="tip" text="Rocky" />

## 下载安装

与 GUI 客户端不同，这个项目通过脚本安装，无需手动下载二进制文件。

### 系统要求

| 项目 | 要求 |
| :--- | :--- |
| **Shell** | `bash` 或 `zsh` |
| **系统命令** | `curl` `tar` `unzip` `xz` `pgrep` |
| **架构** | amd64 / arm64 / armv7（脚本自动识别） |

如果缺少依赖，先通过包管理器安装：

```bash
# Debian / Ubuntu
sudo apt update && sudo apt install -y curl tar unzip xz-utils procps

# CentOS / Rocky
sudo yum install -y curl tar unzip xz procps-ng

# Arch
sudo pacman -S curl tar unzip xz
```

### 一键安装命令

```bash
git clone --branch master --depth 1 https://gh-proxy.org/https://github.com/nelvko/clash-for-linux-install.git \
  && cd clash-for-linux-install \
  && bash install.sh
```

脚本会自动完成：检测架构 → 下载内核 → 配置服务 → 注册管理命令。

::: tip 提示
也可以指定内核类型或直接传入订阅地址：
```bash
bash install.sh mihomo          # 指定 mihomo 内核
bash install.sh clash           # 指定 clash 内核
bash install.sh "订阅地址"       # 安装并导入订阅
```
:::

## 安装步骤

### 1、安装应用

执行上面的一键安装命令，等待脚本自动完成即可。安装完成后**重新打开终端**或执行 `source ~/.bashrc` 使管理命令生效。

### 2、获取订阅

::: tip ⚠️重要提示：
请注意 `clash-for-linux-install` 是一个代理工具安装脚本，并非代理服务商。安装完成并不能直接网络加速。
它就好比飞机，需要[`跑道`](/guide#什么是订阅？)才能起飞。市面上的订阅五花八门各显神通，如果你对订阅选择一无所知可以读一下[如何选择适合自己的订阅↗](/how-choose-service)这篇文章。
:::




### 3、导入订阅

```bash
clashsub add "你的订阅地址"
```

::: warning 注意
订阅链接包含特殊字符时务必加双引号。也支持本地文件：`clashsub add "file:///path/to/config.yaml"`
:::

查看和切换订阅：

```bash
clashsub ls         # 查看订阅列表
clashsub use 1      # 启用第 1 个订阅
clashsub update     # 更新当前订阅
```

### 4、开启代理

```bash
clashon              # 启动内核 + 设置系统代理
```

验证是否生效：

```bash
curl -I https://www.google.com
```

关闭代理：

```bash
clashoff             # 关闭内核 + 取消系统代理
```

如果只想单独控制代理环境变量（不关内核）：

```bash
clashproxy on        # 仅设置代理环境变量
clashproxy off       # 仅取消代理环境变量
```

## 进阶教程

### 打开 Web 控制面板

```bash
clashui              # 输出面板访问地址
clashsecret          # 查看访问密钥
clashsecret newkey   # 修改密钥（自动重启生效）
```

默认前端为 [zashboard](https://github.com/Zephyruso/zashboard)。如需暴露到公网，建议优先使用 SSH 端口转发，避免面板裸露。

### 开启 Tun 模式

::: tip ⚠️提示：
开启前请先阅读《[什么是TUN模式？](/guide#什么是TUN模式？)》
:::

```bash
clashtun on          # 开启 Tun
clashtun off         # 关闭 Tun
clashtun             # 查看当前状态
```

Tun 模式可接管全部系统流量（含 Docker 容器），适合需要透明代理的场景。部分精简内核或容器环境可能不支持。

### Mixin 自定义配置

Mixin 会和原始订阅深度合并且优先级更高，适合自定义规则、DNS、策略组：

```bash
clashmixin           # 查看 Mixin 配置
clashmixin -e        # 编辑 Mixin 配置
clashmixin -c        # 查看原始订阅配置
clashmixin -r        # 查看最终运行时配置
```

### 升级内核

```bash
clashupgrade         # 升级到最新版
clashupgrade -r      # 升级到稳定版
clashupgrade -a      # 升级到测试版
```

### 卸载

```bash
cd clash-for-linux-install && bash uninstall.sh
```

卸载会自动关闭服务、清理管理命令、移除安装目录和定时任务。建议卸载前先手动关闭 Tun。

## 常见问题

### [配置获取失败怎么办？](/troubleshooting)

常见原因：
- 订阅地址未加引号
- 订阅已失效或格式不兼容

尝试 `clashsub update --convert` 使用本地转换器重新拉取。

### [已开启代理仍然无法上网？](/troubleshooting)

排查步骤：
1. `clashctl status` 确认内核正在运行
2. `clashlog` 查看日志是否有报错
3. `echo $http_proxy` 确认代理环境变量已设置
4. 检查订阅是否包含可用节点

### 端口为什么和教程不一样？

脚本会自动检测端口占用，冲突时使用随机可用端口，因此不一定是 `7890` 或 `9090`。通过 `clashctl status` 可查看实际端口。

### Web 面板打不开怎么办？

1. 确认 `clashctl status` 显示运行中
2. 检查防火墙是否放行面板端口
3. 如果是远程服务器，确保用正确的 IP 访问

---

## 📚 相关教程与资源

### 替代客户端推荐
- [Clash Verge](/clash-verge) - 跨平台现代 GUI 客户端，支持 Linux 桌面
- [FlClash](/flclash) - Flutter 跨平台客户端，支持 Linux
- [Clash Mi](/clashmi) - 轻量全平台客户端
- [Hiddify](/hiddify) - 全平台通用客户端
- [查看所有客户端](/download)

### 快速入门指南
- [Clash 完整介绍](/guide) - 理解代理概念和术语
- [安装教程](/quickly/install) - 一步步设置指南
- [订阅导入](/quickly/import) - 订阅管理详解
- [节点选择](/quickly/select-node) - 如何选择最快节点

### 常见问题解答
- [故障排查指南](/troubleshooting) - 故障排除与解决方案
- [订阅推荐](/how-choose-service) - 订阅对比
- [什么是代理协议？](/guide#什么是代理协议？)
- [什么是TUN模式？](/guide#什么是TUN模式？)

::: tip 💡 推荐阅读
如果你是 Clash 新手，建议先阅读 [什么是Clash?](/guide) 了解核心概念，然后跟随 [快速开始指南](/quickly/install) 进行实操。
:::
