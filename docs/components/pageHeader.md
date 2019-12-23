---
title: PageHeader 页头
---
# Button 按钮 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <pageHeader-></pageHeader->
</ClientOnly>

### Attributes

| 参数      | 说明 | 类型     | 可选值 | 默认值 |
|---------|----|--------|-----|-----|
| title   | 标题 | string | —   | 返回  |
| content | 内容 | string | —   | —   |

### Events

| 事件名称 | 说明       | 回调参数 |
|------|----------|------|
| back | 点击左侧区域触发 | —    |

### Slots

| 事件名称    | 说明   |
|---------|------|
| title   | 标题内容 |
| content | 内容   |
