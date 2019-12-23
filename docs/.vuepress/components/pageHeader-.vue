<template>
  <div>
    <h3>基础</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <el-page-header content="详情页面">
        </el-page-header>
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
</template>
<script>
import mixin from '../mixin'
import CIcon from '../../../src/icon/icon'
export default {
  mixins: [mixin],
  components: {
    CIcon
  },
  data () {
    return {
      codeStr: `
          <el-page-header content="详情页面">
        </el-page-header>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>