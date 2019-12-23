<template>
    <div>
        <!-- 基础用法 -->
        <div>
          <h3>基础用法</h3>
          <p>对不同章节的文本段落进行分割。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div>
                    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                    <el-divider></el-divider>
                    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
                </div>       
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
        <!-- 设置文案 -->
        <div>
          <h3>设置文案</h3>
          <p>可以在分割线上自定义文案内容。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div>
                    <span>头上一片晴天，心中一个想念</span>
                    <el-divider content-position="left">少年包青天</el-divider>
                    <span>饿了别叫妈, 叫饿了么</span>
                    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
                    <span>为了无法计算的价值</span>
                    <el-divider content-position="right">阿里云</el-divider>
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
        <!-- 垂直分割 -->
        <div>
          <h3>垂直分割</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div>
                    <span>雨纷纷</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>旧故里</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>草木深</span>
                </div>      
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
            <div>
                <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
                <el-divider></el-divider>
                <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            <div>
                <span>头上一片晴天，心中一个想念</span>
                <el-divider content-position="left">少年包青天</el-divider>
                <span>饿了别叫妈, 叫饿了么</span>
                <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
                <span>为了无法计算的价值</span>
                <el-divider content-position="right">阿里云</el-divider>
            </div> 
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
            <div>
                <span>雨纷纷</span>
                <el-divider direction="vertical"></el-divider>
                <span>旧故里</span>
                <el-divider direction="vertical"></el-divider>
                <span>草木深</span>
            </div> 
        `.replace(/^ {8}/gm, '').trim(),
        
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>