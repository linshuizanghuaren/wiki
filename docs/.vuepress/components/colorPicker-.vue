<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <div class="block">
            <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker>
          </div>
          <div class="block">
            <span class="demonstration">无默认值</span>
            <el-color-picker v-model="color2"></el-color-picker>
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
    <!-- 选择透明度 -->
    <div>
    <h3>选择透明度</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
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
    <!-- 预定义颜色 -->
    <div>
    <h3>预定义颜色</h3>
    <p>ColorPicker 支持预定义颜色</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <el-color-picker
        v-model="color4"
        show-alpha
        :predefine="predefineColors">
        </el-color-picker>
      </div>
      <div class="code-content"
           v-highlight
           style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code"
           @click="showCode(2)"
           ref="xxx">
        <c-icon class="icon-down"
                :name="isShow[2] === false ? 'down' : 'up'"></c-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
    <!-- 不同尺寸 -->
    <div>
    <h3>不同尺寸</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <el-color-picker v-model="color5"></el-color-picker>
        <el-color-picker v-model="color5" size="medium"></el-color-picker>
        <el-color-picker v-model="color5" size="small"></el-color-picker>
        <el-color-picker v-model="color5" size="mini"></el-color-picker>
      </div>
      <div class="code-content"
           v-highlight
           style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr3}}</code></pre>
        </div>
      </div>
      <div class="lock-code"
           @click="showCode(3)"
           ref="xxx">
        <c-icon class="icon-down"
                :name="isShow[3] === false ? 'down' : 'up'"></c-icon>
        <span class="lock-code-word">{{isShow[3] === false ? '显示代码' : '隐藏代码'}}</span>
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
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
        <span class="demonstration">无默认值</span>
        <el-color-picker v-model="color2"></el-color-picker>
        </div>
        `.replace(/^ {8}/gm, '').trim(),
      color1: '#409EFF',
      color2: null,
      codeStr1: `
      <el-color-picker v-model="color" show-alpha></el-color-picker>
      `.replace(/^ {8}/gm, '').trim(),
      color3: 'rgba(19, 206, 102, 0.8)',
      codeStr2: `
      <el-color-picker
        v-model="color"
        show-alpha
        :predefine="predefineColors">
        </el-color-picker>
      `.replace(/^ {8}/gm, '').trim(),
      color4: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        codeStr3: `
        <el-color-picker v-model="color"></el-color-picker>
        <el-color-picker v-model="color" size="medium"></el-color-picker>
        <el-color-picker v-model="color" size="small"></el-color-picker>
        <el-color-picker v-model="color" size="mini"></el-color-picker>
        `.replace(/^ {8}/gm, '').trim(),
        color5: '#409EFF'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>