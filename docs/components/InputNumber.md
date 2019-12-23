---
title: InputNumber 计数器
---
# InputNumber 计数器 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <InputNumber-></InputNumber->
</ClientOnly>

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value | 绑定值 | number |  |
| min | 设置计数器允许的最小值 | number |  | 0 |
| max | 设置计数器允许的最大值 | number |  | Infinity |
| step| 计数器步长 | number |  | 1 |
| size | 计数器尺寸 | string | 	large, small | |
| disabled | 是否禁用计数器 | boolean |  | false |
| controls | 是否使用控制按钮 | boolean |  | true |
| debounce | 输入时的去抖延迟，毫秒 | number |  | 300 |
| controls-position | 控制按钮位置 | string | right |  |
| name | 原生属性 | string |  |  |
| label | 输入框关联的label文字 | string |  |  |


### Events

| 事件名称 | 说明 | 回调参数 |
| ---- | ---- | ---- | 
| change | 绑定值被改变时触发 | 最后变更的值 |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发| (event: Event) |


### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- | 
| focus | 使 input 获取焦点 | |


