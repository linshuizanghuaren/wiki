<template>
    <div>
        <!-- 基本用法 -->
        <div>
            <h3>基本用法</h3>
            <p>适用性广泛的通知栏</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button
                    plain
                    @click="open1">
                    可自动关闭
                </el-button>
                <el-button
                    plain
                    @click="open2">
                    不会自动关闭
                </el-button>
                
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
        <!-- 带有倾向性 -->
        <div>
            <h3>带有倾向性</h3>
            <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button
                    plain
                    @click="open3">
                    成功
                </el-button>
                <el-button
                    plain
                    @click="open4">
                    警告
                </el-button>
                <el-button
                    plain
                    @click="open5">
                    消息
                </el-button>
                <el-button
                    plain
                    @click="open6">
                    错误
                </el-button>
                
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
         <!-- 自定义弹出位置 -->
        <div>
            <h3>自定义弹出位置</h3>
            <p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button
                    plain
                    @click="open7">
                    右上角
                </el-button>
                <el-button
                    plain
                    @click="open8">
                    右下角
                </el-button>
                <el-button
                    plain
                    @click="open9">
                    左下角
                </el-button>
                <el-button
                    plain
                    @click="open10">
                    左上角
                </el-button>
                
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
        <!-- 带有偏移 -->
        <div>
            <h3>带有偏移</h3>
            <p>让 Notification 偏移一些位置</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button
                    plain
                    @click="open11">
                    偏移的消息
                </el-button>
                
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
        <!-- 使用 HTML 片段 -->
        <div>
            <h3>使用 HTML 片段</h3>
            <p>message 属性支持传入 HTML 片段</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button
                    plain
                    @click="open12">
                    使用 HTML 片段
                </el-button>
                
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
         <!-- 隐藏关闭按钮 -->
        <div>
            <h3>隐藏关闭按钮</h3>
            <p>可以不显示关闭按钮</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button
                    plain
                    @click="open13">
                    隐藏关闭按钮
                </el-button>
                
            </div>
            <div class="code-content"
                v-highlight
                style="height: 0;">
                <div class="code-content-height">
                <pre><code class="html">{{codeStr6}}</code></pre>
                </div>
            </div>
            <div class="lock-code"
                @click="showCode(5)"
                ref="xxx">
                <c-icon class="icon-down"
                        :name="isShow[5] === false ? 'down' : 'up'"></c-icon>
                <span class="lock-code-word">{{isShow[5] === false ? '显示代码' : '隐藏代码'}}</span>
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
            <el-button
                plain
                @click="open1">
                可自动关闭
             </el-button>
            <el-button
                 plain
                @click="open2">
                不会自动关闭
            </el-button>         
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            <el-button
                plain
                @click="open3">
                成功
            </el-button>
            <el-button
                plain
                @click="open4">
                警告
            </el-button>
            <el-button
                 plain
                @click="open5">
                消息
             </el-button>
            <el-button
                plain
                @click="open6">
                错误
            </el-button>        
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
            <el-button
                plain
                @click="open7">
                右上角
            </el-button>
            <el-button
                 plain
                 @click="open8">
                右下角
            </el-button>
             <el-button
                 plain
                @click="open9">
                左下角
            </el-button>
            <el-button
                plain
                @click="open10">
                左上角
            </el-button>      
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <el-button
                 plain
                @click="open11">
                偏移的消息
            </el-button>     
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5: `
            <el-button
                plain
                @click="open12">
                使用 HTML 片段
            </el-button>     
        `.replace(/^ {8}/gm, '').trim(),
        codeStr6: `
            <el-button
                plain
                @click="open13">
                隐藏关闭按钮
            </el-button>   
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },
       open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      open7() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open8() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open9() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open10() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      },
      open11() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      },
      open12() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      },
      open13() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>