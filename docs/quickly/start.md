---
outline: deep
head:
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Clash 启动代理教程",
        "description": "演示如何启动 Clash 代理并开始使用",
        "step": [
          {
            "@type": "HowToStep",
            "name": "选择代理节点",
            "text": "在节点列表中选择延迟较低的服务器",
            "url": "https://openetkit.com/zh-CN/quickly/start#1、启动代理"
          },
          {
            "@type": "HowToStep",
            "name": "启用系统代理",
            "text": "点击开关按钮启用系统代理功能",
            "image": "https://openetkit.com/images/clash-verge/install3.webp",
            "url": "https://openetkit.com/zh-CN/quickly/start#1、启动代理"
          },
          {
            "@type": "HowToStep",
            "name": "验证连接",
            "text": "访问目标网站验证代理是否正常工作",
            "url": "https://openetkit.com/zh-CN/quickly/start#1、启动代理"
          }
        ],
        "totalTime": "PT2M"
      }
---

# 启动代理
 以`Clash Verge Rev`为例
 
 ##

 ![Clash verge 订阅导入流程](/images/clash-verge-rev/app-start.webp)

> 到此初始化配置已经全部完成了，尝试访问[Google](https://google.com)或[Youtube](https://youtube.com)看看效果吧
