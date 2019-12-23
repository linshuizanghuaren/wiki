---
title: InfiniteScroll 无限滚动
---
# InfiniteScroll 无限滚动 <Badge text="pass" type="success"/> <Badge text="0.0.1"/>

<ClientOnly>
  <InfiniteScroll-></InfiniteScroll->
</ClientOnly>

###  Attributes

| 参数                          | 说明                          | 类型      | 可选值 | 默认值   |
|-----------------------------|-----------------------------|---------|-----|-------|
| infinite\-scroll\-disabled  | 是否禁用                        | boolean | \-  | false |
| infinite\-scroll\-delay     | 节流时延，单位为ms                  | number  | \-  | 200   |
| infinite\-scroll\-distance  | 触发加载的距离阈值，单位为px             | number  | \-  | 0     |
| infinite\-scroll\-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器。 | boolean | \-  | true  |