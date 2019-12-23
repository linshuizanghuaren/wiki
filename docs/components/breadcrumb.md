---
title: Breadcrumb 面包屑
---
# Breadcrumb 面包屑 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <breadcrumb-></breadcrumb->
</ClientOnly>

### Breadcrumb Attributes

| 参数               | 说明          | 类型     | 可选值 | 默认值   |
|------------------|-------------|--------|-----|-------|
| separator        | 分隔符         | string | —   | 斜杠'/' |
| separator\-class | 图标分隔符 class | string | —   | \-    |

### Breadcrumb Item Attributes

| 参数      | 说明                                           | 类型            | 可选值 | 默认值   |
|---------|----------------------------------------------|---------------|-----|-------|
| to      | 路由跳转对象，同 vue\-router 的 to                    | string/object | —   | —     |
| replace | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean       | —   | false |
