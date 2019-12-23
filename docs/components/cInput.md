---
title: c-input 输入框
---
# c-input 输入框 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <cInput-></cInput->
</ClientOnly>

### props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|--------|---------- |-------------  |-------- |
| value    | 绑定的值，可使用 v-model 双向绑定   | String,Number  | - |   -  |
| width    | 设置输入框的宽度   | String,Number  | - |   -  |
| type     | 输入框类型   | String  | `text`、`password`、`textarea`、`url`、`email` |   -  |
| placeholder | 占位文本   | String  | - |   -  |
| disabled | 设置输入框为禁用状态   | Boolean  | `true`、`false` |   false  |
| readonly | 设置输入框为只读   | Boolean  | `true`、`false` |   false  |
| error | 设置输入框为error状态   | Boolean  | `true`、`false` |   false  |
| size | 设置输入框的尺寸   | String  | `small`、`default`、`large` |   default  |
| name | 设置输入框name   | String  | - |   -  |
| maxlength | 最大输入长度   | Number  | - |   -  |
| minlength | 最大输入长度   | Number  | - |   -  |
| clearable | 是否显示清空按钮   | Boolean  | `true`、`false` | false  |
| spellcheck | 是否拼写检查   | Boolean  | `true`、`false` | false  |
| autofocus | 自动获取焦点   | Boolean  | `true`、`false` |   false  |
| prefix     | 输入框头部图标   | Boolean,String  |  - |  -   |
| suffix     | 输入框尾部图标   | Boolean,String  |  - |  -   |
| rows     | 文本域默认行数，仅在 textarea 类型下有效   | Number  |  - |   2  |
| autosize | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }   | Boolean,Object  |  - |   false  |
| wrap     | 原生的 wrap 属性，仅在 textarea 下生效   | String  |  `soft`、`hard` |   soft  |
| label     | input前的说明文字   | String  |  - |   -  |
| label-width  | input前的说明文字的宽度 fixed为false时有效   | Number  |  -  |   -  |
| fixed     | input的搭配文字的两种样式类型   | Boolean  |  `true`、`false` |   false  |
| show-password     | 切换显示隐藏的密码框   | Boolean  |  `true`、`false` |   false  |

### events
| 事件名	      | 说明	    | 返回值 |
|-------------|---------|----------|
| on-click    | 点击icon时触发    | -  |
| on-change   | 数据改变时触发 | event |
| on-focus   | 输入框聚焦时触发 | - |
| on-blur   | 输入框失去聚焦时触发 | - |
| on-keyup   | 原生的 keyup 事件 | event |
| on-keydown   | 原生的 keydown 事件 | event |

### slot
| name	      | 说明	    | 返回值 |
|-------------|---------|----------|
| prefix    | 需要设置设置前面的icon位置的slot    | -  |
| suffix   | 需要设置设置后面的icon位置的slot  | - |
| prepend   | 设置前面位置的slot label的fixed样式 不与label同时设置  | - |
| append   | 设置后面位置的slot label的fixed样式 不与label同时设置  | - |
| label   | 前置的label文字框  | - |