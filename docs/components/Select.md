---
title: Select 选择器
---
# Select 选择器 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <Select-></Select->
</ClientOnly>

### Select Attributes

| 参数                     | 说明                                           | 类型       | 可选值              | 默认值   |
|------------------------|----------------------------------------------|----------|------------------|-------|
| multiple               | 是否多选                                         | boolean  | —                | false |
| disabled               | 是否禁用                                         | boolean  | —                | false |
| value\-key             | 作为 value 唯一标识的键名，绑定值为对象类型时必填                 | string   | —                | value |
| size                   | 输入框尺寸                                        | string   | large/small/mini | —     |
| clearable              | 单选时是否可以清空选项                                  | boolean  | —                | false |
| collapse\-tags         | 多选时是否将选中值按文字的形式展示                            | boolean  | —                | false |
| multiple\-limit        | 多选时用户最多可以选择的项目数，为 0 则不限制                     | number   | —                | 0     |
| name                   | select input 的 name 属性                       | string   | —                | —     |
| placeholder            | 占位符                                          | string   | —                | 请选择   |
| filterable             | 是否可搜索                                        | boolean  | —                | false |
| allow\-create          | 是否允许用户创建新条目，需配合 filterable 使用                | boolean  | —                | false |
| filter\-method         | 自定义搜索方法                                      | function | —                | —     |
| remote                 | 是否为远程搜索                                      | boolean  | —                | false |
| remote\-method         | 远程搜索方法                                       | function | —                | —     |
| loading                | 是否正在从远程获取数据                                  | boolean  | —                | false |
| loading\-text          | 远程加载时显示的文字                                   | string   | —                | 加载中   |
| no\-match\-text        | 搜索条件无匹配时显示的文字                                | string   | —                | 无匹配数据 |
| no\-data\-text         | 选项为空时显示的文字                                   | string   | —                | 无数据   |
| popper\-class          | Select 下拉框的类名                                | string   | —                | —     |
| reserve\-keyword       | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词                 | boolean  | —                | false |
| default\-first\-option | 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用 | boolean  | \-               | false |


### Select Events
| 事件名称            | 说明                   | 回调参数                 |
|-----------------|----------------------|----------------------|
| change          | 选中值发生变化时触发           | 目前的选中值               |
| visible\-change | 下拉框出现/隐藏时触发          | 出现则为 true，隐藏则为 false |
| remove\-tag     | 多选模式下移除tag时触发        | 移除的tag值              |
| clear           | 可清空的单选模式下用户点击清空按钮时触发 | —                    |
| blur            | 当 input 失去焦点时触发      | \(event: Event\)     |
| focus           | 当 input 获得焦点时触发      | \(event: Event\)     |


### Option Group Attributes
| 参数       | 说明              | 类型      | 可选值 | 默认值   |
|----------|-----------------|---------|-----|-------|
| label    | 分组的组名           | string  | —   | —     |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | —   | false |


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

