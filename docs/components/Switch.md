---
title: Switch 开关
---
# Switch 开关 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <Switch-></Switch->
</ClientOnly>

### Attributes

| 参数                    | 说明                                        | 类型                        | 可选值 | 默认值      |
|-----------------------|-------------------------------------------|---------------------------|-----|----------|
| disabled              | 是否禁用                                      | boolean                   | —   | false    |
| width                 | switch 的宽度（像素）                            | number                    | —   | 40       |
| active\-icon\-class   | switch 打开时所显示图标的类名，设置此项会忽略 active\-text   | string                    | —   | —        |
| inactive\-icon\-class | switch 关闭时所显示图标的类名，设置此项会忽略 inactive\-text | string                    | —   | —        |
| active\-text          | switch 打开时的文字描述                           | string                    | —   | —        |
| inactive\-text        | switch 关闭时的文字描述                           | string                    | —   | —        |
| active\-value         | switch 打开时的值                              | boolean / string / number | —   | true     |
| inactive\-value       | switch 关闭时的值                              | boolean / string / number | —   | false    |
| active\-color         | switch 打开时的背景色                            | string                    | —   | \#409EFF |
| inactive\-color       | switch 关闭时的背景色                            | string                    | —   | \#C0CCDA |
| name                  | switch 对应的 name 属性                        | string                    | —   | —        |


### Events

| 事件名称   | 说明                  | 回调参数  |
|--------|---------------------|-------|
| change | switch 状态发生变化时的回调函数 | 新状态的值 |


### Methods

| 方法名   | 说明            | 参数 |
|-------|---------------|----|
| focus | 使 Switch 获取焦点 | \- |


