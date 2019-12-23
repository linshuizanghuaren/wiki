---
title: Steps 步骤条
---
# Steps 步骤条 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <step-></step->
</ClientOnly>



### Steps Attributes

| 参数              | 说明                           | 类型              | 可选值                                       | 默认值        |
|-----------------|------------------------------|-----------------|-------------------------------------------|------------|
| space           | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | —                                         | —          |
| direction       | 显示方向                         | string          | vertical/horizontal                       | horizontal |
| active          | 设置当前激活步骤                     | number          | —                                         | 0          |
| process\-status | 设置当前步骤的状态                    | string          | wait / process / finish / error / success | process    |
| finish\-status  | 设置结束步骤的状态                    | string          | wait / process / finish / error / success | finish     |
| align\-center   | 进行居中对齐                       | boolean         | \-                                        | false      |
| simple          | 是否应用简洁风格                     | boolean         | \-                                        | false      |



### Step Attributes

| 参数          | 说明                          | 类型                                        | 可选值    | 默认值 |
|-------------|-----------------------------|-------------------------------------------|--------|-----|
| title       | 标题                          | string                                    | —      | —   |
| description | 描述性文字                       | string                                    | —      | —   |
| icon        | 图标                          | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | —   |
| status      | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | \-     |     |



### Step Slot
| name        | 说明       |
|-------------|----------|
| icon        | 自定义图标    |
| title       | 自定义标题    |
| description | 自定义描述性文字 |



### Option Attributes
| 参数       | 说明                      | 类型                   | 可选值 | 默认值   |
|----------|-------------------------|----------------------|-----|-------|
| value    | 选项的值                    | string/number/object | —   | —     |
| label    | 选项的标签，若不设置则默认与 value 相同 | string/number        | —   | —     |
| disabled | 是否禁用该选项                 | boolean              | —   | false |


### Methods
| 方法名   | 说明           | 参数 |
|-------|--------------|----|
| focus | 使 input 获取焦点 | \- |

