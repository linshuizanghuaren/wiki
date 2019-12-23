---
title: DateTimePicker 日期时间选择器
---
# DateTimePicker 日期时间选择器 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <DateTimePicker-></DateTimePicker->
</ClientOnly>

### Attributes

| 参数                   | 说明                         | 类型      | 可选值                                                    | 默认值          |
|----------------------|----------------------------|---------|--------------------------------------------------------|--------------|
| readonly             | 完全只读                       | boolean | —                                                      | false        |
| disabled             | 禁用                         | boolean | —                                                      | false        |
| editable             | 文本框可输入                     | boolean | —                                                      | true         |
| clearable            | 是否显示清除按钮                   | boolean | —                                                      | true         |
| size                 | 输入框尺寸                      | string  | large, small, mini                                     | —            |
| placeholder          | 非范围选择时的占位内容                | string  | —                                                      | —            |
| start\-placeholder   | 范围选择时开始日期的占位内容             | string  | —                                                      | —            |
| end\-placeholder     | 范围选择时结束日期的占位内容             | string  | —                                                      | —            |
| time\-arrow\-control | 是否使用箭头进行时间选择               | boolean | —                                                      | false        |
| type                 | 显示类型                       | string  | year/month/date/week/ datetime/datetimerange/daterange | date         |
| format               | 显示在输入框中的格式                 | string  | 年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss，AM/PM A               | yyyy\-MM\-dd |
| align                | 对齐方式                       | string  | left, center, right                                    | left         |
| popper\-class        | DateTimePicker 下拉框的类名      | string  | —                                                      | —            |
| picker\-options      | 当前时间日期选择器特有的选项参考下表         | object  | —                                                      | \{\}         |
| range\-separator     | 选择范围时的分隔符                  | string  | \-                                                     | '\-'         |
| default\-value       | 可选，选择器打开时默认显示的时间           | Date    | 可被new Date\(\)解析                                       | —            |
| value\-format        | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | string  | 年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss，AM/PM A               | —            |
| name                 | 原生属性                       | string  | —                                                      | —            |
| unlink\-panels       | 在范围选择器里取消两个日期面板之间的联动       | boolean | —                                                      | false        |




### Picker Options

| 参数             | 说明                                              | 类型         | 可选值   | 默认值 |
|----------------|-------------------------------------------------|------------|-------|-----|
| shortcuts      | 设置快捷选项，需要传入 \{ text, onClick \} 对象用法参考 demo 或下表 | Object\[\] | —     | —   |
| disabledDate   | 设置禁用状态，参数为当前日期，要求返回 Boolean                     | Function   | —     | —   |
| firstDayOfWeek | 周起始日                                            | Number     | 1 到 7 | 7   |



### Shortcuts

| 参数      | 说明                                                                          | 类型       | 可选值 | 默认值 |
|---------|-----------------------------------------------------------------------------|----------|-----|-----|
| text    | 标题文本                                                                        | string   | —   | —   |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm\.$emit\('pick', new Date\(\)\) | function | —   | —   |



### Events

| 事件名称   | 说明              | 回调参数                               |
|--------|-----------------|------------------------------------|
| change | 用户确认选定的值时触发     | 组件绑定值。格式与绑定值一致，可受 value\-format 控制 |
| blur   | 当 input 失去焦点时触发 | 组件实例                               |
| focus  | 当 input 获得焦点时触发 | 组件实例                               |

### Methods

| 方法名   | 说明           | 参数 |
|-------|--------------|----|
| focus | 使 input 获取焦点 | —  |






