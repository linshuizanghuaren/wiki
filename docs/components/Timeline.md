---
title: Timeline 时间线
---
# Timeline 时间线 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <Timeline-></Timeline->
</ClientOnly>

### Timeline Attributes


| 参数      | 说明             | 类型      | 可选值 | 默认值   |
|---------|----------------|---------|-----|-------|
| reverse | 指定节点排序方向，默认为正序 | boolean | —   | false |



###  Timeline-item Attributes

| 参数              | 说明      | 类型      | 可选值                                         | 默认值    |
|-----------------|---------|---------|---------------------------------------------|--------|
| timestamp       | 时间戳     | string  | \-                                          | —      |
| hide\-timestamp | 是否隐藏时间戳 | boolean | —                                           | false  |
| placement       | 时间戳位置   | string  | top / bottom                                | bottom |
| type            | 节点类型    | string  | primary / success / warning / danger / info | \-     |
| color           | 节点颜色    | string  | hsl / hsv / hex / rgb                       | \-     |
| size            | 节点尺寸    | string  | normal / large                              | normal |
| icon            | 节点图标    | string  | —                                           | \-     |


###  Timeline-Item Slot

| name | 说明                 |
|------|--------------------|
| —    | Timeline\-Item 的内容 |
| dot  | 自定义节点              |



