<template>
<div>
    <!-- 基础用法 -->
  <div>
    <h2>简单用法</h2>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
          <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>    
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
    <!-- 禁用状态 -->
  <div>
      <h2>禁用状态</h2>
      <p>计数器不可用的状态。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
           <el-input-number v-model="num2" :disabled="true"></el-input-number>
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
  
    <!-- 步数 -->
    <div>
      <h2>步数</h2>
      <p>允许定义递增递减的步数控制</p>
      <div class="component-wrapper">
      <div class="component-wrapper-demo">
           <el-input-number v-model="num3" :step="2"></el-input-number>  
      </div>
      <div class="code-content"
           v-highlight
           style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr3}}</code></pre>
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
  <!-- 尺寸 -->
   <div>
      <h2>尺寸</h2>
      <p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-input-number v-model="num4"></el-input-number>
            <el-input-number size="medium" v-model="num5"></el-input-number>
            <el-input-number size="small" v-model="num6"></el-input-number>
            <el-input-number size="mini" v-model="num7"></el-input-number>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr4}}</code></pre>
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
  <!-- 按钮位置 -->
   <div>
      <h2>按钮位置</h2>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr5}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(4)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[4] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[4] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
  </div>
  
</div>
</template>
<script>
  import mixin from '../mixin'
  import CIcon from '../../../src/icon/icon'
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      CIcon
    },
    data() {
      return {
        codeStr: `
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          
        `.replace(/^ {8}/gm, '').trim(),
        num1: 1,
        codeStr2: `
       <el-input-number v-model="num2" :disabled="true"></el-input-number>
      `.replace(/^ {8}/gm, '').trim(),
       num2: 1,
       codeStr3: `
       <el-input-number v-model="num3" :step="2"></el-input-number>  
      `.replace(/^ {8}/gm, '').trim(),
        num3: 5,
        codeStr4: `
        <el-input-number v-model="num4"></el-input-number>
        <el-input-number size="medium" v-model="num5"></el-input-number>
        <el-input-number size="small" v-model="num6"></el-input-number>
        <el-input-number size="mini" v-model="num7"></el-input-number>
      `.replace(/^ {8}/gm, '').trim(),
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1,
        codeStr5: `
       <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      `.replace(/^ {8}/gm, '').trim(),
         num8: 1,
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>