# 👀 wiki搭建

### 快速上手
- 新建文件夹
- 进入文件夹，npm init -y
- 修改package.json的script
- 按照下面的样式新建基础目录

```js
wiki-cli
|------docs
|       |---README.md
|       |---.vuepress
|               |---public
|               |---config.js
|------package.json
```
- 修改config.js文件，配置网站标题、描述、主题等信息

```js
module.exports = {
  title: 'Chen\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
```
- 一切准备就绪，就可以跑起来了

```js
npm tun dev
```