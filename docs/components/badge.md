---
title: Badge 标记
---
# Badge 标记 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <badge-></badge->
</ClientOnly>

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value | 显示值 | string, number | — | — |
| max | 最大值，超过最大值会显示 '\{max\}\+'，要求 value 是 Number 类型 | number | — | — |
| is\-dot | 小圆点 | boolean | — | false |
| hidden  | 隐藏 badge | boolean | — | false |
| type    | 类型 | string | primary / success / warning / danger / info | — |
