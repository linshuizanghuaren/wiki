<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <p>基础的按钮用法。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-row>
            <c-button>默认按钮</c-button>
            <c-button :type="'primary'">主要按钮</c-button>
            <c-button :type="'success'">成功按钮</c-button>
            <c-button :type="'info'">信息按钮</c-button>
            <c-button :type="'warning'">警告按钮</c-button>
            <c-button :type="'danger'">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :plain="true">朴素按钮</c-button>
            <c-button :type="'primary'"
                      :plain="true">主要按钮</c-button>
            <c-button :type="'success'"
                      :plain="true">成功按钮</c-button>
            <c-button :type="'info'"
                      :plain="true">信息按钮</c-button>
            <c-button :type="'warning'"
                      :plain="true">警告按钮</c-button>
            <c-button :type="'danger'"
                      :plain="true">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :round="true">圆角按钮</c-button>
            <c-button :type="'primary'"
                      :round="true">主要按钮</c-button>
            <c-button :type="'success'"
                      :round="true">成功按钮</c-button>
            <c-button :type="'info'"
                      :round="true">信息按钮</c-button>
            <c-button :type="'warning'"
                      :round="true">警告按钮</c-button>
            <c-button :type="'danger'"
                      :round="true">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :icon="'el-icon-search'"
                      :circle="true"></c-button>
            <c-button :type="'primary'"
                      :icon="'el-icon-edit'"
                      :circle="true"></c-button>
            <c-button :type="'success'"
                      :icon="'el-icon-check'"
                      :circle="true"></c-button>
            <c-button :type="'info'"
                      :icon="'el-icon-message'"
                      :circle="true"></c-button>
            <c-button :type="'warning'"
                      :icon="'el-icon-star-off'"
                      :circle="true"></c-button>
            <c-button :type="'danger'"
                      :icon="'el-icon-delete'"
                      :circle="true"></c-button>
          </el-row>
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
    <!-- 禁用状态 -->
    <div>
      <h3>禁用状态</h3>
      <p>按钮不可用状态。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-row>
            <c-button :disabled="true">默认按钮</c-button>
            <c-button :type="primary"
                      :disabled="true">主要按钮</c-button>
            <c-button :type="success"
                      :disabled="true">成功按钮</c-button>
            <c-button :type="info"
                      :disabled="true">信息按钮</c-button>
            <c-button :type="warning"
                      :disabled="true">警告按钮</c-button>
            <c-button :type="danger"
                      :disabled="true">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :plain="true"
                      :disabled="true">朴素按钮</c-button>
            <c-button :type="primary"
                      :plain="true"
                      :disabled="true">主要按钮</c-button>
            <c-button :type="success"
                      :plain="true"
                      :disabled="true">成功按钮</c-button>
            <c-button :type="info"
                      :plain="true"
                      :disabled="true">信息按钮</c-button>
            <c-button :type="warning"
                      :plain="true"
                      :disabled="true">警告按钮</c-button>
            <c-button :type="danger"
                      :plain="true"
                      :disabled="true">危险按钮</c-button>
          </el-row>
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
    <!-- 文字按钮 -->
    <div>
      <h3>文字按钮</h3>
      <p>没有边框和背景色的按钮。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-button :type="'text'">文字按钮</c-button>
          <c-button :type="'text'"
                    :disabled="true">文字按钮</c-button>
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
    <!-- 图标按钮 -->
    <div>
      <h3>图标按钮</h3>
      <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-button :type="'primary'"
                    :icon="'el-icon-edit'"></c-button>
          <c-button :type="'primary'"
                    :icon="'el-icon-share'"></c-button>
          <c-button :type="'primary'"
                    :icon="'el-icon-delete'"></c-button>
          <c-button :type="'primary'"
                    :icon="'el-icon-search'">搜索</c-button>
          <c-button :type="'primary'">上传<i class="el-icon-upload el-icon--right"></i></c-button>
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
    <!-- 按钮组 -->
    <div>
      <h3>按钮组</h3>
      <p>以按钮组的方式出现，常用于多项类似操作。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-button-group>
            <c-button :type="'primary'"
                      :icon="'el-icon-arrow-left'">上一页</c-button>
            <c-button :type="'primary'">下一页<i class="el-icon-arrow-right el-icon--right"></i></c-button>
          </el-button-group>
          <el-button-group>
            <c-button :type="'primary'"
                      :icon="'el-icon-edit'"></c-button>
            <c-button :type="'primary'"
                      :icon="'el-icon-share'"></c-button>
            <c-button :type="'primary'"
                      :icon="'el-icon-delete'"></c-button>
          </el-button-group>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr4}}</code></pre>
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
    <!-- 加载中 -->
    <div>
      <h3>加载中</h3>
      <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-button :type="'primary'"
                     :loading="true">加载中</el-button>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr5}}</code></pre>
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
    <!-- 不同尺寸 -->
    <div>
      <h3>不同尺寸</h3>
      <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-row>
            <c-button>默认按钮</c-button>
            <c-button :size="'medium'">中等按钮</c-button>
            <c-button :size="'small'">小型按钮</c-button>
            <c-button :size="'mini'">超小按钮</c-button>
          </el-row>
          <el-row>
            <c-button :round="true">默认按钮</c-button>
            <c-button :size="'medium'" :round="true">中等按钮</c-button>
            <c-button :size="'small'" :round="true">小型按钮</c-button>
            <c-button :size="'mini'" :round="true">超小按钮</c-button>
          </el-row>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr6}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
             @click="showCode(6)"
             ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[6] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[6] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixin from '../mixin'
import CIcon from '../../../src/icon/icon'
import CButton from '../../../src/button/index'
export default {
  mixins: [mixin],
  components: {
    CIcon,
    CButton
  },
  data () {
    return {
      codeStr0: `
          <el-row>
            <c-button>默认按钮</c-button>
            <c-button :type="'primary'">主要按钮</c-button>
            <c-button :type="'success'">成功按钮</c-button>
            <c-button :type="'info'">信息按钮</c-button>
            <c-button :type="'warning'">警告按钮</c-button>
            <c-button :type="'danger'">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :plain="true">朴素按钮</c-button>
            <c-button :type="'primary'"
                      :plain="true">主要按钮</c-button>
            <c-button :type="'success'"
                      :plain="true">成功按钮</c-button>
            <c-button :type="'info'"
                      :plain="true">信息按钮</c-button>
            <c-button :type="'warning'"
                      :plain="true">警告按钮</c-button>
            <c-button :type="'danger'"
                      :plain="true">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :round="true">圆角按钮</c-button>
            <c-button :type="'primary'"
                      :round="true">主要按钮</c-button>
            <c-button :type="'success'"
                      :round="true">成功按钮</c-button>
            <c-button :type="'info'"
                      :round="true">信息按钮</c-button>
            <c-button :type="'warning'"
                      :round="true">警告按钮</c-button>
            <c-button :type="'danger'"
                      :round="true">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :icon="'el-icon-search'"
                      :circle="true"></c-button>
            <c-button :type="'primary'"
                      :icon="'el-icon-edit'"
                      :circle="true"></c-button>
            <c-button :type="'success'"
                      :icon="'el-icon-check'"
                      :circle="true"></c-button>
            <c-button :type="'info'"
                      :icon="'el-icon-message'"
                      :circle="true"></c-button>
            <c-button :type="'warning'"
                      :icon="'el-icon-star-off'"
                      :circle="true"></c-button>
            <c-button :type="'danger'"
                      :icon="'el-icon-delete'"
                      :circle="true"></c-button>
          </el-row>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr1: `
          <el-row>
            <c-button :disabled="true">默认按钮</c-button>
            <c-button :type="primary"
                      :disabled="true">主要按钮</c-button>
            <c-button :type="success"
                      :disabled="true">成功按钮</c-button>
            <c-button :type="info"
                      :disabled="true">信息按钮</c-button>
            <c-button :type="warning"
                      :disabled="true">警告按钮</c-button>
            <c-button :type="danger"
                      :disabled="true">危险按钮</c-button>
          </el-row>
          <el-row>
            <c-button :plain="true"
                      :disabled="true">朴素按钮</c-button>
            <c-button :type="primary"
                      :plain="true"
                      :disabled="true">主要按钮</c-button>
            <c-button :type="success"
                      :plain="true"
                      :disabled="true">成功按钮</c-button>
            <c-button :type="info"
                      :plain="true"
                      :disabled="true">信息按钮</c-button>
            <c-button :type="warning"
                      :plain="true"
                      :disabled="true">警告按钮</c-button>
            <c-button :type="danger"
                      :plain="true"
                      :disabled="true">危险按钮</c-button>
          </el-row>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr2: `
          <c-button :type="'text'">文字按钮</c-button>
          <c-button :type="'text'"
                    :disabled="true">文字按钮</c-button>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr3: `
          <c-button :type="'primary'"
                    :icon="'el-icon-edit'"></c-button>
          <c-button :type="'primary'"
                    :icon="'el-icon-share'"></c-button>
          <c-button :type="'primary'"
                    :icon="'el-icon-delete'"></c-button>
          <c-button :type="'primary'"
                    :icon="'el-icon-search'">搜索</c-button>
          <c-button :type="'primary'">上传<i class="el-icon-upload el-icon--right"></i></c-button>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr4: `
          <el-button-group>
            <c-button :type="'primary'"
                      :icon="'el-icon-arrow-left'">上一页</c-button>
            <c-button :type="'primary'">下一页<i class="el-icon-arrow-right el-icon--right"></i></c-button>
          </el-button-group>
          <el-button-group>
            <c-button :type="'primary'"
                      :icon="'el-icon-edit'"></c-button>
            <c-button :type="'primary'"
                      :icon="'el-icon-share'"></c-button>
            <c-button :type="'primary'"
                      :icon="'el-icon-delete'"></c-button>
          </el-button-group>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr5: `
          <el-button :type="'primary'"
                     :loading="true">加载中</el-button>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr6: `
          <el-row>
            <c-button>默认按钮</c-button>
            <c-button :size="'medium'">中等按钮</c-button>
            <c-button :size="'small'">小型按钮</c-button>
            <c-button :size="'mini'">超小按钮</c-button>
          </el-row>
          <el-row>
            <c-button :round="true">默认按钮</c-button>
            <c-button :size="'medium'"
                       :round="true">中等按钮</el-button>
            <c-button :size="'small'"
                       :round="true">小型按钮</el-button>
            <c-button :size="'mini'"
                       :round="true">超小按钮</el-button>
          </el-row>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>