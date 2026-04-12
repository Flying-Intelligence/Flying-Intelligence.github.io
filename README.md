# Flying Intelligence 飞行智能社区

![Logo](files/images/FlyingIntelligence_LOGO.png)

---

## 简介 | Introduction
Flying Intelligence（飞行智能社区）致力于低空智能感知、机动、操作与协同等方向的研究与交流。我们聚焦于前沿的飞行智能技术，推动学术与产业的深度融合。

Flying Intelligence is a community dedicated to research and communication in low-altitude intelligent perception, maneuvering, operation, and coordination.

---

## 项目结构 | Project Structure

- **入口文件**：`index.html` (主页)
- **核心数据**：`papers-data.js` (统一管理所有论文数据，位于根目录方便修改)
- **子页面**：`pages/` (包含 Publication, Group, Resource, Research 等)
- **静态资源**：
    - `files/images/`：图片资源（含 Logo 及论文封面）
    - `files/videos/`：展示视频
    - `css/` & `js/`：样式与交互脚本
- **自动化工具**：`citationmap.py` (生成全球引用地图)

---

## 快速维护 | Quick Maintenance

若需添加或修改论文信息，请直接编辑根目录下的 **`papers-data.js`**。
修改后，主页和出版物页面均会自动同步更新。

---

## 本地预览 | Local Preview

1. 启动本地服务器：
```sh
python -m http.server 8000
```
2. 访问：`http://localhost:8000`

---

## 贡献 | Contribution

欢迎对飞行智能相关内容感兴趣的同学和老师加入我们！
We welcome researchers interested in flying intelligence to join us!
