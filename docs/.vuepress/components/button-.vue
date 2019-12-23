<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <p>基础的按钮用法。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary"
                       plain>主要按钮</el-button>
            <el-button type="success"
                       plain>成功按钮</el-button>
            <el-button type="info"
                       plain>信息按钮</el-button>
            <el-button type="warning"
                       plain>警告按钮</el-button>
            <el-button type="danger"
                       plain>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary"
                       round>主要按钮</el-button>
            <el-button type="success"
                       round>成功按钮</el-button>
            <el-button type="info"
                       round>信息按钮</el-button>
            <el-button type="warning"
                       round>警告按钮</el-button>
            <el-button type="danger"
                       round>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button icon="el-icon-search"
                       circle></el-button>
            <el-button type="primary"
                       icon="el-icon-edit"
                       circle></el-button>
            <el-button type="success"
                       icon="el-icon-check"
                       circle></el-button>
            <el-button type="info"
                       icon="el-icon-message"
                       circle></el-button>
            <el-button type="warning"
                       icon="el-icon-star-off"
                       circle></el-button>
            <el-button type="danger"
                       icon="el-icon-delete"
                       circle></el-button>
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
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary"
                       disabled>主要按钮</el-button>
            <el-button type="success"
                       disabled>成功按钮</el-button>
            <el-button type="info"
                       disabled>信息按钮</el-button>
            <el-button type="warning"
                       disabled>警告按钮</el-button>
            <el-button type="danger"
                       disabled>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button plain
                       disabled>朴素按钮</el-button>
            <el-button type="primary"
                       plain
                       disabled>主要按钮</el-button>
            <el-button type="success"
                       plain
                       disabled>成功按钮</el-button>
            <el-button type="info"
                       plain
                       disabled>信息按钮</el-button>
            <el-button type="warning"
                       plain
                       disabled>警告按钮</el-button>
            <el-button type="danger"
                       plain
                       disabled>危险按钮</el-button>
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
          <el-button type="text">文字按钮</el-button>
          <el-button type="text"
                     disabled>文字按钮</el-button>
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
          <el-button type="primary"
                     icon="el-icon-edit"></el-button>
          <el-button type="primary"
                     icon="el-icon-share"></el-button>
          <el-button type="primary"
                     icon="el-icon-delete"></el-button>
          <el-button type="primary"
                     icon="el-icon-search">搜索</el-button>
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
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
            <el-button type="primary"
                       icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
          <el-button-group>
            <el-button type="primary"
                       icon="el-icon-edit"></el-button>
            <el-button type="primary"
                       icon="el-icon-share"></el-button>
            <el-button type="primary"
                       icon="el-icon-delete"></el-button>
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
          <el-button type="primary"
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
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
          </el-row>
          <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium"
                       round>中等按钮</el-button>
            <el-button size="small"
                       round>小型按钮</el-button>
            <el-button size="mini"
                       round>超小按钮</el-button>
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
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary"
                       plain>主要按钮</el-button>
            <el-button type="success"
                       plain>成功按钮</el-button>
            <el-button type="info"
                       plain>信息按钮</el-button>
            <el-button type="warning"
                       plain>警告按钮</el-button>
            <el-button type="danger"
                       plain>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary"
                       round>主要按钮</el-button>
            <el-button type="success"
                       round>成功按钮</el-button>
            <el-button type="info"
                       round>信息按钮</el-button>
            <el-button type="warning"
                       round>警告按钮</el-button>
            <el-button type="danger"
                       round>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button icon="el-icon-search"
                       circle></el-button>
            <el-button type="primary"
                       icon="el-icon-edit"
                       circle></el-button>
            <el-button type="success"
                       icon="el-icon-check"
                       circle></el-button>
            <el-button type="info"
                       icon="el-icon-message"
                       circle></el-button>
            <el-button type="warning"
                       icon="el-icon-star-off"
                       circle></el-button>
            <el-button type="danger"
                       icon="el-icon-delete"
                       circle></el-button>
          </el-row>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr1: `
          <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary"
                       disabled>主要按钮</el-button>
            <el-button type="success"
                       disabled>成功按钮</el-button>
            <el-button type="info"
                       disabled>信息按钮</el-button>
            <el-button type="warning"
                       disabled>警告按钮</el-button>
            <el-button type="danger"
                       disabled>危险按钮</el-button>
          </el-row>

          <el-row>
            <el-button plain
                       disabled>朴素按钮</el-button>
            <el-button type="primary"
                       plain
                       disabled>主要按钮</el-button>
            <el-button type="success"
                       plain
                       disabled>成功按钮</el-button>
            <el-button type="info"
                       plain
                       disabled>信息按钮</el-button>
            <el-button type="warning"
                       plain
                       disabled>警告按钮</el-button>
            <el-button type="danger"
                       plain
                       disabled>危险按钮</el-button>
          </el-row>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr2: `
          <el-button type="text">文字按钮</el-button>
          <el-button type="text"
                     disabled>文字按钮</el-button>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr3: `
          <el-button type="primary"
                     icon="el-icon-edit"></el-button>
          <el-button type="primary"
                     icon="el-icon-share"></el-button>
          <el-button type="primary"
                     icon="el-icon-delete"></el-button>
          <el-button type="primary"
                     icon="el-icon-search">搜索</el-button>
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr4: `
          <el-button-group>
            <el-button type="primary"
                       icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
          <el-button-group>
            <el-button type="primary"
                       icon="el-icon-edit"></el-button>
            <el-button type="primary"
                       icon="el-icon-share"></el-button>
            <el-button type="primary"
                       icon="el-icon-delete"></el-button>
          </el-button-group>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr5: `
          <el-button type="primary"
                     :loading="true">加载中</el-button>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr6: `
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
          </el-row>
          <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium"
                       round>中等按钮</el-button>
            <el-button size="small"
                       round>小型按钮</el-button>
            <el-button size="mini"
                       round>超小按钮</el-button>
          </el-row>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>