<template>
    <div>
        <!-- 基础用法 -->
        <div>
          <h3>基础用法</h3>
          <p>在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
                </ul>
   
            </div>
            <div class="code-content"
                v-highlight
                style="height: 0;">
              <div class="code-content-height">
                <pre><code class="html">{{codeStr}}</code></pre>
              </div>
            </div>
            <div class="lock-code"
                @click="showCode(0)"
                ref="xxx">
              <c-icon class="icon-down"
                      :name="isShow[0] === false ? 'down' : 'up'"></c-icon>
              <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
          </div>
        </div>
        <!-- 禁用加载 -->
        <div>
          <h3>禁用加载</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="infinite-list-wrapper" style="overflow:auto">
                    <ul
                    class="list"
                    v-infinite-scroll="load2"
                    infinite-scroll-disabled="disabled">
                    <li v-for="i in count2" class="list-item">{{ i }}</li>
                    </ul>
                    <p v-if="loading">加载中...</p>
                    <p v-if="noMore">没有更多了</p>
                </div>
   
            </div>
            <div class="code-content"
                v-highlight
                style="height: 0;">
              <div class="code-content-height">
                <pre><code class="html">{{codeStr2}}</code></pre>
              </div>
            </div>
            <div class="lock-code"
                @click="showCode(1)"
                ref="xxx">
              <c-icon class="icon-down"
                      :name="isShow[1] === false ? 'down' : 'up'"></c-icon>
              <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
  import mixin from '../mixin'
  import CIcon from '../../../src/icon/icon'
  export default {
    mixins: [mixin],
    components: {
      CIcon
    },
    data() {
      return {
        codeStr: `
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
        </ul>
        `.replace(/^ {8}/gm, '').trim(),
        count: 0,
        codeStr2: `
        <div class="infinite-list-wrapper" style="overflow:auto">
            <ul
            class="list"
            v-infinite-scroll="load2"
            infinite-scroll-disabled="disabled">
            <li v-for="i in count2" class="list-item">{{ i }}</li>
            </ul>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
        </div>  
        `.replace(/^ {8}/gm, '').trim(),
        count2: 10,
        loading: false
        
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.count += 2
      },
      load2 () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style lang="scss" scoped>
.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
}
// 设置禁用加载 样式
.infinite-list-wrapper {
    height: 300px;
    text-align: center;
}
.infinite-list-wrapper .list {
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list-wrapper .list-item+.list-item {
    margin-top: 10px;
}
.infinite-list-wrapper .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #fff6f6;
    color: #ff8484;
}
</style>