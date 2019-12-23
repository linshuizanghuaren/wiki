<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <p>评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
          </div>
          <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate v-model="value2"
                     :colors="colors">
            </el-rate>
          </div>
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
    <!-- 辅助文字 -->
    <div>
    <h3>辅助文字</h3>
    <p>用辅助文字直接地表达对应分数</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <el-rate
        v-model="value"
        show-text>
        </el-rate>
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
        <div class="block">
        <span class="demonstration">默认不区分颜色</span>
        <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
        <span class="demonstration">区分颜色</span>
        <el-rate
            v-model="value2"
            :colors="colors">
        </el-rate>
        </div>
        `.replace(/^ {8}/gm, '').trim(),
        value: null,
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      codeStr1: `
      <el-rate
        v-model="value"
        show-text>
        </el-rate>
      `.replace(/^ {8}/gm, '').trim(),
    }
  }
}
</script>

<style lang="scss" scoped>
</style>