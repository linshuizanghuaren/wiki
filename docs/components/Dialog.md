---
title: Dialog 对话框
---
# Dialog 对话框 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <Dialog-></Dialog->
</ClientOnly>

### Attributes

| 参数                       | 说明                                                  | 类型                                | 可选值 | 默认值   |
|--------------------------|-----------------------------------------------------|-----------------------------------|-----|-------|
| visible                  | 是否显示 Dialog，支持 \.sync 修饰符                           | boolean                           | —   | false |
| title                    | Dialog 的标题，也可通过具名 slot （见下表）传入                      | string                            | —   | —     |
| width                    | Dialog 的宽度                                          | string                            | —   | 50%   |
| fullscreen               | 是否为全屏 Dialog                                        | boolean                           | —   | false |
| top                      | Dialog CSS 中的 margin\-top 值                         | string                            | —   | 15vh  |
| modal                    | 是否需要遮罩层                                             | boolean                           | —   | true  |
| modal\-append\-to\-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上    | boolean                           | —   | true  |
| append\-to\-body         | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                           | —   | false |
| lock\-scroll             | 是否在 Dialog 出现时将 body 滚动锁定                           | boolean                           | —   | true  |
| custom\-class            | Dialog 的自定义类名                                       | string                            | —   | —     |
| close\-on\-click\-modal  | 是否可以通过点击 modal 关闭 Dialog                            | boolean                           | —   | true  |
| close\-on\-press\-escape | 是否可以通过按下 ESC 关闭 Dialog                              | boolean                           | —   | true  |
| show\-close              | 是否显示关闭按钮                                            | boolean                           | —   | true  |
| before\-close            | 关闭前的回调，会暂停 Dialog 的关闭                               | function\(done\)，done 用于关闭 Dialog | —   | —     |
| center                   | 是否对头部和底部采用居中布局                                      | boolean                           | —   | false |



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







