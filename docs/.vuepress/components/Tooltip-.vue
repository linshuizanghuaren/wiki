<template>
    <div>
        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="box">
                    <div class="top">
                        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                        <el-button>上左</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                        <el-button>上边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                        <el-button>上右</el-button>
                        </el-tooltip>
                    </div>
                    <div class="left">
                        <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                        <el-button>左上</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                        <el-button>左边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                        <el-button>左下</el-button>
                        </el-tooltip>
                    </div>

                    <div class="right">
                        <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                        <el-button>右上</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                        <el-button>右边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                        <el-button>右下</el-button>
                        </el-tooltip>
                    </div>
                    <div class="bottom">
                        <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                        <el-button>下左</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                        <el-button>下边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                        <el-button>下右</el-button>
                        </el-tooltip>
                    </div>
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
        <!-- 主题 -->
        <div>
            <h3>主题</h3>
            <p>Tooltip 组件提供了两个不同的主题：dark和light。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tooltip content="Top center" placement="top">
                    <el-button>Dark</el-button>
                    </el-tooltip>
                    <el-tooltip content="Bottom center" placement="bottom" effect="light">
                    <el-button>Light</el-button>
                </el-tooltip>
                
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
        <!-- 更多 Content -->
        <div>
            <h3>更多 Content</h3>
            <p>展示多行文本或者是设置文本内容的格式。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tooltip placement="top">
                    <div slot="content">多行信息<br/>第二行信息</div>
                    <el-button>Top center</el-button>
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
        <!-- 高级扩展 -->
        <div>
            <h3>高级扩展</h3>
            <p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：
transition 属性可以定制显隐的动画效果，默认为fade-in-linear。 如果需要关闭 tooltip 功能，disabled 属性可以满足这个需求，它接受一个Boolean，设置为true即可。
事实上，这是基于 Vue-popper 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                 <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
                    <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
                </el-tooltip>
                
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
        <div class="box">
                    <div class="top">
                        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                        <el-button>上左</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                        <el-button>上边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                        <el-button>上右</el-button>
                        </el-tooltip>
                    </div>
                    <div class="left">
                        <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                        <el-button>左上</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                        <el-button>左边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                        <el-button>左下</el-button>
                        </el-tooltip>
                    </div>

                    <div class="right">
                        <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                        <el-button>右上</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                        <el-button>右边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                        <el-button>右下</el-button>
                        </el-tooltip>
                    </div>
                    <div class="bottom">
                        <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                        <el-button>下左</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                        <el-button>下边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                        <el-button>下右</el-button>
                        </el-tooltip>
                    </div>
                </div>          
        `.replace(/^ {8}/gm, '').trim(),
         codeStr2: `
            <el-tooltip content="Top center" placement="top">
                <el-button>Dark</el-button>
                </el-tooltip>
                <el-tooltip content="Bottom center" placement="bottom" effect="light">
                <el-button>Light</el-button>
            </el-tooltip>
         `.replace(/^ {8}/gm, '').trim(),
         codeStr3: `
            <el-tooltip placement="top">
                    <div slot="content">多行信息<br/>第二行信息</div>
                    <el-button>Top center</el-button>
            </el-tooltip>
         `.replace(/^ {8}/gm, '').trim(),
         codeStr4: `
            <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
                <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
            </el-tooltip>
         `.replace(/^ {8}/gm, '').trim(),
         disabled: false
      }
    }
  }
</script>

<style lang="scss" scoped>
    .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
    }
</style>