# Vue3 待办事项列表项目

## 项目简介
本项目是一个基于 Vue3 + Pinia + TypeScript + Bootstrap 5.2 的待办事项（ToDo List）Web 应用。支持任务的增删改查、状态管理、从本地 JSON 获取数据、公司新闻展示、GMT+8 时间显示等功能。

## 功能特性
- 任务的添加、完成、删除（CRUD）
- 任务分为"待办事项"和"已完成"
- 任务添加时自动记录 GMT+8 时间
- 从本地 JSON 文件模拟 REST API 获取任务和新闻
- 顶部滚动公司新闻栏，随页面全局展示
- 使用 Pinia 进行状态管理
- UI 基于 Bootstrap 5.2
- 支持 TypeScript
- 代码风格统一（ESLint + Prettier）

## 技术栈
- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap 5.2](https://getbootstrap.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 安装与运行
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 代码检查
npm run lint

# 代码格式化
npm run format

# TypeScript 类型检查
npm run type-check
```

## 目录结构
```
todo-list-vue3/
├── public/           # 静态资源（tasks.json, news.json）
├── src/
│   ├── components/   # 组件
│   ├── stores/       # Pinia 状态管理
│   ├── App.vue       # 主页面
│   ├── main.ts       # 入口文件
│   └── env.d.ts      # TypeScript .vue 声明
├── package.json
├── tsconfig.json
├── .eslintrc.cjs
├── .prettierrc
└── README.md
```

## 说明
- 任务和新闻数据存放于 `public/tasks.json` 和 `public/news.json`，可模拟 REST API。
- 代码已适配 TypeScript，所有 `.vue` 文件类型已声明。
- 代码风格统一，建议开发前先运行 `npm run lint` 和 `npm run format`。

## 代码提交规范

本项目使用 commitlint 和 husky 来规范 Git 提交信息。提交信息必须符合以下格式：

### 提交信息格式

```
<类型>: <主题>

<详细描述>

<关联 Issue>
```

- **类型**: 提交类型，如 `feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`chore`、`revert`、`build`、`ci` 等。
- **主题**: 简短描述，使用现在时态，首字母不要大写，结尾不要加句号，建议不超过 50 个字符。
- **详细描述**: 可选，使用现在时态，说明改动的原因和影响，建议不超过 72 个字符。
- **关联 Issue**: 可选，如 `Closes #123, #456`。

### 示例

```
feat: 添加用户登录功能

- 实现用户登录功能
- 更新 UI 显示

Closes #123
```

### 配置说明

- **commitlint**: 用于检查提交信息是否符合规范。
- **husky**: 用于在 Git 钩子中运行 commitlint。

### 安装与使用

```bash
# 安装依赖
npm install

# 提交代码
git add .
git commit -m "feat: 添加新功能"
```

---
