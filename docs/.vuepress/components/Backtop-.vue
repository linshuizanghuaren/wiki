<template>
    <div>
      <!-- 基础用法 -->
        <div>
          <h3>基础用法</h3>
          <p>滑动页面即可看到右下方的按钮。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                Scroll down to see the bottom-right button.
                <el-backtop class=".page-component__scroll .el-scrollbar__wrap"></el-backtop>

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
        <!-- 自定义显示内容 -->
        <div>
          <h3>自定义显示内容</h3>
          <p>显示区域被固定为 40px * 40px 的区域, 其中的内容可支持自定义。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                Scroll down to see the bottom-right button.
                <el-backtop class=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
                    <div
                    style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
                    >
                    UP
                    </div>
                </el-backtop>

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
         Scroll down to see the bottom-right button.
         <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            Scroll down to see the bottom-right button.
            <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
            <div
                style="{
                    height: 100%;
                    width: 100%;
                    background-color: #f2f5f6;
                    box-shadow: 0 0 6px rgba(0,0,0, .12);
                    text-align: center;
                    line-height: 40px;
                    color: #1989fa;
                }"
            >
            UP
            </div>
            </el-backtop>
        `.replace(/^ {8}/gm, '').trim(),
        
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>