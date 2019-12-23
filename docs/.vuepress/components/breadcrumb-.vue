<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>简单用法</h3>
      <p>预览</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr0}}</code></pre>
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
    <!-- 图标分隔符 -->
    <div>
      <h3>简单用法</h3>
      <p>预览</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr1}}</code></pre>
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
  data () {
    return {
      codeStr0: `
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr1: `
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>