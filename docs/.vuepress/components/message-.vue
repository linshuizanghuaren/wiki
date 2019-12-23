<template>
    <div>
        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>从顶部出现，3 秒后自动消失。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button :plain="true" @click="open">打开消息提示</el-button>
                <el-button :plain="true" @click="openVn">VNode</el-button>
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
        <!-- 不同状态 -->
        <div>
            <h3>不同状态</h3>
            <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button :plain="true" @click="open2">成功</el-button>
                <el-button :plain="true" @click="open3">警告</el-button>
                <el-button :plain="true" @click="open1">消息</el-button>
                <el-button :plain="true" @click="open4">错误</el-button>
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
        <!-- 可关闭 -->
        <div>
            <h3>可关闭</h3>
            <p>可以添加关闭按钮。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button :plain="true" @click="open5">消息</el-button>
                <el-button :plain="true" @click="open6">成功</el-button>
                <el-button :plain="true" @click="open7">警告</el-button>
                <el-button :plain="true" @click="open8">错误</el-button>
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
        <!-- 文字居中 -->
        <div>
            <h3>文字居中</h3>
            <p>使用 center 属性让文字水平居中。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button :plain="true" @click="openCenter">文字居中</el-button>
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
                <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
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
    mixins: [mixin],
    components: {
      CIcon
    },
    data() {
      return {
        codeStr: `
            <el-button :plain="true" @click="open">打开消息提示</el-button>
            <el-button :plain="true" @click="openVn">VNode</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            <el-button :plain="true" @click="open2">成功</el-button>
            <el-button :plain="true" @click="open3">警告</el-button>
            <el-button :plain="true" @click="open1">消息</el-button>
            <el-button :plain="true" @click="open4">错误</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
            <el-button :plain="true" @click="open5">消息</el-button>
            <el-button :plain="true" @click="open6">成功</el-button>
            <el-button :plain="true" @click="open7">警告</el-button>
            <el-button :plain="true" @click="open8">错误</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <el-button :plain="true" @click="openCenter">文字居中</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5: `
            <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
     methods: {
        //  基础用法
        open() {
            this.$message('这是一条消息提示');
        },

        openVn() {
            const h = this.$createElement;
            this.$message({
            message: h('p', null, [
                h('span', null, '内容可以是 '),
                h('i', { style: 'color: teal' }, 'VNode')
            ])
            });
        },

        //不同状态
        open1() {
            this.$message('这是一条消息提示');
        },
        open2() {
            this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
            });
        },

        open3() {
            this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning'
            });
        },

        open4() {
            this.$message.error('错了哦，这是一条错误消息');
        },

        open5() {
            this.$message({
            showClose: true,
            message: '这是一条消息提示'
            });
        },

        open6() {
            this.$message({
            showClose: true,
            message: '恭喜你，这是一条成功消息',
            type: 'success'
            });
        },

        open7() {
            this.$message({
            showClose: true,
            message: '警告哦，这是一条警告消息',
            type: 'warning'
            });
        },

        open8() {
            this.$message({
            showClose: true,
            message: '错了哦，这是一条错误消息',
            type: 'error'
            });
        },

        //文字居中
        openCenter() {
            this.$message({
            message: '居中的文字',
            center: true
            });
        },

        //使用HTML片段
        openHTML() {
            this.$message({
            dangerouslyUseHTMLString: true,
            message: '<strong>这是 <i>HTML</i> 片段</strong>'
            });
        }
    }
  }
</script>

<style lang="scss" scoped>
</style>