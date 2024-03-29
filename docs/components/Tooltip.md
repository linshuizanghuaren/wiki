---
title: Tooltip 文字提示
---
# Tooltip 文字提示 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <Tooltip-></Tooltip->
</ClientOnly>

### Attributes

| 参数               | 说明                                                | 类型      | 可选值                                                                                                               | 默认值                                                     |
|------------------|---------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| effect           | 默认提供的主题                                           | String  | dark/light                                                                                                        | dark                                                    |
| content          | 显示的内容，也可以通过 slot\#content 传入 DOM                  | String  | —                                                                                                                 | —                                                       |
| placement        | Tooltip 的出现位置                                     | String  | top/top\-start/top\-end/bottom/bottom\-start/bottom\-end/left/left\-start/left\-end/right/right\-start/right\-end | bottom                                                  |
| value / v\-model | 状态是否可见                                            | Boolean | —                                                                                                                 | false                                                   |
| disabled         | Tooltip 是否可用                                      | Boolean | —                                                                                                                 | false                                                   |
| offset           | 出现位置的偏移量                                          | Number  | —                                                                                                                 | 0                                                       |
| transition       | 定义渐变动画                                            | String  | —                                                                                                                 | el\-fade\-in\-linear                                    |
| visible\-arrow   | 是否显示 Tooltip 箭头，更多参数可见Vue\-popper                 | Boolean | —                                                                                                                 | true                                                    |
| popper\-options  | popper\.js 的参数                                    | Object  | 参考 popper\.js 文档                                                                                                  | \{ boundariesElement: 'body', gpuAcceleration: false \} |
| open\-delay      | 延迟出现，单位毫秒                                         | Number  | —                                                                                                                 | 0                                                       |
| manual           | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean | —                                                                                                                 | false                                                   |
| popper\-class    | 为 Tooltip 的 popper 添加类名                           | String  | —                                                                                                                 | —                                                       |
| enterable        | 鼠标是否可进入到 tooltip 中                                | Boolean | —                                                                                                                 | true                                                    |
| hide\-after      | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏                | number  | —                                                                                                                 | 0                                                       |
| tabindex         | Tooltip 组件的 tabindex                              | number  | —                                                                                                                 | 0                                                       |



### Slot

| name   | 说明              |
|--------|-----------------|
| —      | Dialog 的内容      |
| title  | Dialog 标题区的内容   |
| footer | Dialog 按钮操作区的内容 |

### Events

| 事件名称  | 说明           | 回调参数 |
|-------|--------------|------|
| close | Dialog 关闭的回调 | —    |
| open  | Dialog 打开的回调 | —    |







