<template>
    <div>

        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>展示新消息数量。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-badge :value="12" class="item">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="3" class="item">
                    <el-button size="small">回复</el-button>
                </el-badge>
                <el-badge :value="1" class="item" type="primary">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="2" class="item" type="warning">
                    <el-button size="small">回复</el-button>
                </el-badge>

                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                        评论
                        <el-badge class="mark" :value="12" />
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                        回复
                        <el-badge class="mark" :value="3" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
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
        <!-- 最大值 -->
        <div>
            <h3>最大值</h3>
            <p>可自定义最大值。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                    <el-button size="small">回复</el-button>
                </el-badge>
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
        <!-- 自定义内容 -->
        <div>
            <h3>自定义内容</h3>
            <p>可以显示数字以外的文本内容。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-badge value="new" class="item">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge value="hot" class="item">
                    <el-button size="small">回复</el-button>
                </el-badge>
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
        <!-- 小红点 -->
        <div>
            <h3>小红点</h3>
            <p>以红点的形式标注需要关注的内容。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-badge is-dot class="item">数据查询</el-badge>
                <el-badge is-dot class="item">
                    <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
                </el-badge>
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
            <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
            <el-badge :value="1" class="item" type="primary">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="2" class="item" type="warning">
                <el-button size="small">回复</el-button>
            </el-badge>

            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                    评论
                    <el-badge class="mark" :value="12" />
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">
                    回复
                    <el-badge class="mark" :value="3" />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            <el-badge :value="200" :max="99" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="100" :max="10" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
            <el-badge value="new" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge value="hot" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <el-badge is-dot class="item">数据查询</el-badge>
            <el-badge is-dot class="item">
                <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
            </el-badge>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>