<template>
<div>
  <!-- 基本用法 -->
  <div>
    <h3>简单用法</h3>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>
        
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
  <!-- 文字描述 -->
  <div>
    <h3>文字描述</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
          <el-switch
            v-model="value3"
            active-text="按月付费"
            inactive-text="按年付费">
            </el-switch>
            <el-switch
            style="display: block"
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费">
            </el-switch>
        
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
  <!-- 扩展的 value 类型 -->
  <div>
    <h3>扩展的 value 类型</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
          <el-tooltip :content="'Switch value: ' + value5" placement="top">
            <el-switch
                v-model="value5"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="100"
                inactive-value="0">
            </el-switch>
            </el-tooltip>
        
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
   <!-- 禁用状态 -->
  <div>
    <h3>禁用状态</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
          <el-switch
            v-model="value6"
            disabled>
            </el-switch>
            <el-switch
            v-model="value7"
            disabled>
            </el-switch>        
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
        <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
            </el-switch>        
        `.replace(/^ {8}/gm, '').trim(),
        value1: true,
        value2: true,
        codeStr2: `
        <el-switch
            v-model="value3"
            active-text="按月付费"
            inactive-text="按年付费">
            </el-switch>
            <el-switch
            style="display: block"
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费">
        </el-switch>       
        `.replace(/^ {8}/gm, '').trim(),
        value3: true,
        value4: true,
        codeStr3: `
       <el-tooltip :content="'Switch value: ' + value5" placement="top">
            <el-switch
                v-model="value5"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="100"
                inactive-value="0">
            </el-switch>
            </el-tooltip>    
        `.replace(/^ {8}/gm, '').trim(),
        value5: '100',
        codeStr4: `
         <el-switch
            v-model="value6"
            disabled>
            </el-switch>
            <el-switch
            v-model="value7"
            disabled>
            </el-switch>    
        `.replace(/^ {8}/gm, '').trim(),
        value6: true,
        value7: false
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>