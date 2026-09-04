import type { PlatformId } from '../utils/platform'

export interface DownloadClient {
  id: string
  name: string
  icon: string
  description: string
  descriptionEn: string
  suitableFor: string
  suitableForEn: string
  tags: string[]
  tagsEn: string[]
  source: string
  guideSlug?: string
  downloadUrl?: string
  localDownloadUrl?: string
}

export interface DownloadCategory {
  name: string
  icon: string
  summary: string
  clients: DownloadClient[]
}

export const downloadCatalog: Record<PlatformId, DownloadCategory> = {
  windows: {
    name: 'Windows',
    icon: 'i-simple-icons-windows11',
    summary: '适用于 Windows 10 和 Windows 11 的桌面客户端。',
    clients: [
      {
        id: 'clash-verge-rev',
        guideSlug: 'clash-verge',
        name: 'Clash Verge Rev',
        icon: 'i-lucide-panels-top-left',
        description: '现代化的 Mihomo 桌面客户端，界面清晰，常用功能完整。',
        descriptionEn: 'A modern Mihomo desktop client with a clear interface and a complete set of everyday features.',
        suitableFor: '适合大多数 Windows 用户',
        suitableForEn: 'Recommended for most Windows users',
        tags: ['开源', 'Mihomo', 'TUN', 'x64 / ARM64'],
        tagsEn: ['Open source', 'Mihomo', 'TUN', 'x64 / ARM64'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/Clash.Verge_2.4.2_x64-setup.exe',
      },
      {
        id: 'flclash',
        guideSlug: 'flclash',
        name: 'FlClash',
        icon: 'i-lucide-layers-3',
        description: '基于 Flutter 的跨平台客户端，在桌面端和移动端保持相近体验。',
        descriptionEn: 'A cross-platform Flutter client with a consistent experience across desktop and mobile devices.',
        suitableFor: '适合需要跨设备一致体验的用户',
        suitableForEn: 'For users who want a consistent cross-device experience',
        tags: ['开源', '跨平台', 'Mihomo'],
        tagsEn: ['Open source', 'Cross-platform', 'Mihomo'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/FlClash-0.8.90-windows-amd64-setup.exe',
      },
    ],
  },
  macos: {
    name: 'macOS',
    icon: 'i-simple-icons-apple',
    summary: '适用于 Apple 芯片和 Intel 芯片 Mac 的桌面客户端。',
    clients: [
      {
        id: 'clash-verge-rev',
        guideSlug: 'clash-verge',
        name: 'Clash Verge Rev',
        icon: 'i-lucide-panels-top-left',
        description: '现代化的 Mihomo 桌面客户端，支持 Apple 芯片和 Intel 芯片。',
        descriptionEn: 'A modern Mihomo desktop client with builds for both Apple Silicon and Intel Macs.',
        suitableFor: '适合大多数 macOS 用户',
        suitableForEn: 'Recommended for most macOS users',
        tags: ['开源', 'Mihomo', 'Apple Silicon', 'Intel'],
        tagsEn: ['Open source', 'Mihomo', 'Apple Silicon', 'Intel'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/Clash.Verge_2.4.2_aarch64.dmg',
      },
      {
        id: 'flclash',
        guideSlug: 'flclash',
        name: 'FlClash',
        icon: 'i-lucide-layers-3',
        description: '跨平台客户端，适合同时使用电脑和 Android 设备的用户。',
        descriptionEn: 'A cross-platform client for users who want a similar workflow on desktop and Android.',
        suitableFor: '适合需要跨设备一致体验的用户',
        suitableForEn: 'For users who want a consistent cross-device experience',
        tags: ['开源', '跨平台', 'Mihomo'],
        tagsEn: ['Open source', 'Cross-platform', 'Mihomo'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/FlClash-0.8.90-macos-arm64.dmg',
      },
      {
        id: 'clash-md',
        name: 'Clash for macOS (clash.md)',
        icon: 'i-lucide-download',
        description: '由 clash.md 提供的 Clash 下载入口，可根据设备获取适用于 macOS 的版本。',
        descriptionEn: 'A macOS download page maintained by clash.md, with guidance for choosing the correct build.',
        suitableFor: '适合希望快速找到对应版本的用户',
        suitableForEn: 'For users who want a guided macOS download',
        tags: ['macOS', 'Apple Silicon', 'Intel', '免费'],
        tagsEn: ['macOS', 'Apple Silicon', 'Intel', 'Free'],
        source: 'clash.md',
        downloadUrl: 'https://clash.md/zh/platforms/macos',
      },
    ],
  },
  linux: {
    name: 'Linux',
    icon: 'i-simple-icons-linux',
    summary: '提供 DEB、RPM、AppImage 等常见 Linux 安装格式。',
    clients: [
      {
        id: 'clash-verge-rev',
        guideSlug: 'clash-verge',
        name: 'Clash Verge Rev',
        icon: 'i-lucide-panels-top-left',
        description: '功能完整的 Mihomo 桌面客户端，覆盖常见 Linux 发行版。',
        descriptionEn: 'A full-featured Mihomo desktop client with packages for common Linux distributions.',
        suitableFor: '适合需要完整图形界面的用户',
        suitableForEn: 'For users who want a complete graphical interface',
        tags: ['开源', 'Mihomo', 'DEB', 'RPM', 'AppImage'],
        tagsEn: ['Open source', 'Mihomo', 'DEB', 'RPM', 'AppImage'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/Clash.Verge-2.4.2-1.x86_64.rpm',
      },
      {
        id: 'flclash',
        guideSlug: 'flclash',
        name: 'FlClash',
        icon: 'i-lucide-layers-3',
        description: '轻量的跨平台图形客户端，提供统一的桌面与移动端体验。',
        descriptionEn: 'A lightweight cross-platform graphical client with a consistent desktop and mobile experience.',
        suitableFor: '适合偏好简洁界面的用户',
        suitableForEn: 'For users who prefer a simpler interface',
        tags: ['开源', '跨平台', '图形界面'],
        tagsEn: ['Open source', 'Cross-platform', 'GUI'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/FlClash-0.8.90-linux-amd64.rpm',
      },
      {
        id: 'clash-for-linux-install',
        guideSlug: 'clash-for-linux',
        name: 'Clash for Linux Install',
        icon: 'i-lucide-download',
        description: '面向 Linux 的命令行安装与管理脚本，可部署 Mihomo / Clash，并管理订阅、Web 面板和 TUN 模式。',
        descriptionEn: 'A command-line installer and management toolkit for deploying Mihomo / Clash with subscriptions, a web dashboard, and TUN mode.',
        suitableFor: '适合 Linux 服务器、无桌面环境或偏好命令行的用户',
        suitableForEn: 'For Linux servers, headless systems, and users who prefer the command line',
        tags: ['开源', '命令行', 'Mihomo', 'TUN'],
        tagsEn: ['Open source', 'CLI', 'Mihomo', 'TUN'],
        source: 'GitHub',
        downloadUrl: 'https://github.com/nelvko/clash-for-linux-install',
      },
    ],
  },
  android: {
    name: 'Android',
    icon: 'i-simple-icons-android',
    summary: '适用于 Android 手机和平板设备的客户端。',
    clients: [
      {
        id: 'flclash',
        guideSlug: 'flclash',
        name: 'FlClash',
        icon: 'i-lucide-layers-3',
        description: '界面清晰的跨平台客户端，适合日常在 Android 设备上使用。',
        descriptionEn: 'A clear cross-platform client designed for everyday use on Android devices.',
        suitableFor: '适合大多数 Android 用户',
        suitableForEn: 'Recommended for most Android users',
        tags: ['开源', 'Mihomo', '手机 / 平板'],
        tagsEn: ['Open source', 'Mihomo', 'Phone / Tablet'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/FlClash-0.8.90-android-x86_64.apk',
      },
      {
        id: 'clash-meta-for-android',
        guideSlug: 'clash-meta-for-android',
        name: 'Clash Meta for Android',
        icon: 'i-lucide-smartphone',
        description: '面向 Android 的 Mihomo 客户端，保留接近经典 Clash 的使用方式。',
        descriptionEn: 'An Android Mihomo client with a workflow close to the classic Clash experience.',
        suitableFor: '适合熟悉传统 Clash 界面的用户',
        suitableForEn: 'For users familiar with the classic Clash interface',
        tags: ['开源', 'Mihomo', 'Android'],
        tagsEn: ['Open source', 'Mihomo', 'Android'],
        source: 'GitHub Releases',
        downloadUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases/latest',
        localDownloadUrl: 'https://github.clash.guide/clash-clients/cmfa-2.11.17-meta-universal-release.apk',
      },
    ],
  },
  ios: {
    name: 'iPhone / iPad',
    icon: 'i-simple-icons-apple',
    summary: 'iOS 客户端需要通过 App Store 获取，可用情况可能受地区影响。',
    clients: [
      {
        id: 'shadowrocket',
        guideSlug: 'shadowrocket',
        name: 'Shadowrocket',
        icon: 'i-lucide-rocket',
        description: '常见的 iOS 网络工具，支持订阅、规则与多种代理协议。',
        descriptionEn: 'A popular iOS network utility supporting subscriptions, rules, and multiple proxy protocols.',
        suitableFor: '适合偏好简洁操作的用户',
        suitableForEn: 'For users who prefer a straightforward workflow',
        tags: ['App Store', 'iPhone', 'iPad', '付费'],
        tagsEn: ['App Store', 'iPhone', 'iPad', 'Paid'],
        source: 'App Store',
        downloadUrl: 'https://apps.apple.com/app/shadowrocket/id932747118',
      },
      {
        id: 'stash',
        guideSlug: 'ios-clash',
        name: 'Stash',
        icon: 'i-lucide-box',
        description: '支持规则、订阅和多种代理协议的 iOS 网络工具。',
        descriptionEn: 'An iOS network utility with support for rules, subscriptions, and multiple proxy protocols.',
        suitableFor: '适合需要较完整规则功能的用户',
        suitableForEn: 'For users who need more complete rule support',
        tags: ['App Store', 'iPhone', 'iPad', '付费'],
        tagsEn: ['App Store', 'iPhone', 'iPad', 'Paid'],
        source: 'App Store',
        downloadUrl: 'https://apps.apple.com/app/stash-rule-based-proxy/id1596063349',
      },
      {
        id: 'clash-md',
        name: 'Clash for iOS (clash.md)',
        icon: 'i-lucide-download',
        description: '由 clash.md 提供的 Clash 下载入口，可根据设备获取适用于 iPhone 和 iPad 的版本。',
        descriptionEn: 'An iOS download guide maintained by clash.md for compatible iPhone and iPad clients.',
        suitableFor: '适合希望快速找到 iOS 下载方式的用户',
        suitableForEn: 'For users who want a guided iOS download',
        tags: ['iOS', 'iPhone', 'iPad', 'App Store', '免费'],
        tagsEn: ['iOS', 'iPhone', 'iPad', 'App Store', 'Free'],
        source: 'clash.md',
        downloadUrl: 'https://clash.md/zh/platforms/ios',
      },
    ],
  },
}
