<template>
    <div>
        <!-- 基本用法 -->
        <div>
          <h3>基本用法</h3>
          <p>页面中的非浮层元素，不会自动消失。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-alert
                  title="成功提示的文案"
                  type="success">
                </el-alert>
                <el-alert
                  title="消息提示的文案"
                  type="info">
                </el-alert>
                <el-alert
                  title="警告提示的文案"
                  type="warning">
                </el-alert>
                <el-alert
                  title="错误提示的文案"
                  type="error">
                </el-alert>
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
        <!-- 自定义关闭按钮 -->
        <div>
          <h3>自定义关闭按钮</h3>
          <p>自定义关闭按钮为文字或其他符号。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
               <el-alert
                  title="不可关闭的 alert"
                  type="success"
                  :closable="false">
                </el-alert>
                <el-alert
                  title="自定义 close-text"
                  type="info"
                  close-text="知道了">
                </el-alert>
                <el-alert
                  title="设置了回调的 alert"
                  type="warning"
                  @close="hello">
                </el-alert>
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
        <!-- 带有 icon -->
        <div>
          <h3>带有 icon</h3>
          <p>表示某种状态时提升可读性。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
               <el-alert
                  title="成功提示的文案"
                  type="success"
                  show-icon>
                </el-alert>
                <el-alert
                  title="消息提示的文案"
                  type="info"
                  show-icon>
                </el-alert>
                <el-alert
                  title="警告提示的文案"
                  type="warning"
                  show-icon>
                </el-alert>
                <el-alert
                  title="错误提示的文案"
                  type="error"
                  show-icon>
                </el-alert>
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
              <el-alert
                title="成功提示的文案"
                type="success"
                center
                show-icon>
              </el-alert>
              <el-alert
                title="消息提示的文案"
                type="info"
                center
                show-icon>
              </el-alert>
              <el-alert
                title="警告提示的文案"
                type="warning"
                center
                show-icon>
              </el-alert>
              <el-alert
                title="错误提示的文案"
                type="error"
                center
                show-icon>
              </el-alert>
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
        <!-- 带有辅助性文字介绍 -->
        <div>
          <h3>带有辅助性文字介绍</h3>
          <p>包含标题和内容，解释更详细的警告。</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
              <el-alert
                title="带辅助性文字介绍"
                type="success"
                description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
              </el-alert>
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
        <!-- 带有 icon 和辅助性文字介绍 -->
        <div>
          <h3>带有 icon 和辅助性文字介绍</h3>
          <!-- <p>包含标题和内容，解释更详细的警告。</p> -->
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
              <el-alert
                title="成功提示的文案"
                type="success"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
              </el-alert>
              <el-alert
                title="消息提示的文案"
                type="info"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
              </el-alert>
              <el-alert
                title="警告提示的文案"
                type="warning"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
              </el-alert>
              <el-alert
                title="错误提示的文案"
                type="error"
                description="文字说明文字说明文字说明文字说明文字说明文字说明"
                show-icon>
              </el-alert>
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
            <el-alert
              title="成功提示的文案"
              type="success">
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info">
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning">
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error">
            </el-alert>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2:`
            <el-alert
              title="不可关闭的 alert"
              type="success"
              :closable="false">
            </el-alert>
            <el-alert
              title="自定义 close-text"
              type="info"
              close-text="知道了">
            </el-alert>
            <el-alert
              title="设置了回调的 alert"
              type="warning"
              @close="hello">
            </el-alert>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3:`
            <el-alert
              title="成功提示的文案"
              type="success"
              show-icon>
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info"
              show-icon>
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning"
              show-icon>
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error"
              show-icon>
            </el-alert>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4:`
            <el-alert
              title="成功提示的文案"
              type="success"
              center
              show-icon>
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info"
              center
              show-icon>
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning"
              center
              show-icon>
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error"
              center
              show-icon>
            </el-alert>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5:`
            <el-alert
              title="带辅助性文字介绍"
              type="success"
              description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </el-alert>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr6:`
            <el-alert
              title="成功提示的文案"
              type="success"
              description="文字说明文字说明文字说明文字说明文字说明文字说明"
              show-icon>
            </el-alert>
            <el-alert
              title="消息提示的文案"
              type="info"
              description="文字说明文字说明文字说明文字说明文字说明文字说明"
              show-icon>
            </el-alert>
            <el-alert
              title="警告提示的文案"
              type="warning"
              description="文字说明文字说明文字说明文字说明文字说明文字说明"
              show-icon>
            </el-alert>
            <el-alert
              title="错误提示的文案"
              type="error"
              description="文字说明文字说明文字说明文字说明文字说明文字说明"
              show-icon>
            </el-alert>
        `.replace(/^ {8}/gm, '').trim()

      }
    },
    methods: {
      // 自定义关闭按钮
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-alert{
    margin-bottom: 10px;
}
</style>