<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h2>基础用法</h2>
      <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-radio v-model="radio"
                    label="1">备选项</el-radio>
          <el-radio v-model="radio"
                    label="2">备选项</el-radio>
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

    <!-- 禁用状态 -->
    <div>
      <h2>禁用状态</h2>
      <p>单选框不可用的状态。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-radio disabled
                    v-model="radio2"
                    label="禁用">备选项</el-radio>
          <el-radio disabled
                    v-model="radio2"
                    label="选中且禁用">备选项</el-radio>
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
    <!-- 单选框组 -->
    <div>
      <h2>单选框组</h2>
      <p>适用于在多个互斥的选项中选择的场景</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-radio-group v-model="radio3">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
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

    <!-- 按钮样式 -->
    <div>
      <h2>按钮样式</h2>
      <p>按钮样式的单选组合</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <div>
            <el-radio-group v-model="radio1">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio2"
                            size="medium">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio3"
                            size="small">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"
                               disabled></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio4"
                            disabled
                            size="mini">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
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
    <!-- 带有边框 -->

    <div>
      <h2>带有边框</h2>
      <p>预览</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <div>
            <el-radio v-model="radio5"
                      label="1"
                      border>备选项1</el-radio>
            <el-radio v-model="radio5"
                      label="2"
                      border>备选项2</el-radio>
          </div>
          <div style="margin-top: 20px">
            <el-radio v-model="radio5"
                      label="1"
                      border
                      size="medium">备选项1</el-radio>
            <el-radio v-model="radio5"
                      label="2"
                      border
                      size="medium">备选项2</el-radio>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio5"
                            size="small">
              <el-radio label="1"
                        border>备选项1</el-radio>
              <el-radio label="2"
                        border
                        disabled>备选项2</el-radio>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio5"
                            size="mini"
                            disabled>
              <el-radio label="1"
                        border>备选项1</el-radio>
              <el-radio label="2"
                        border>备选项2</el-radio>
            </el-radio-group>
          </div>
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
  name: 'demo',
  mixins: [mixin],
  components: {
    CIcon
  },
  data () {
    return {
      codeStr: `
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
        `.replace(/^ {8}/gm, '').trim(),
      radio: '1',
      codeStr2: `
      <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
      `.replace(/^ {8}/gm, '').trim(),
      radio2: '选中且禁用',
      codeStr3: `
      <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
      `.replace(/^ {8}/gm, '').trim(),
      radio3: 3,
      codeStr4: `
      <div>
        <el-radio-group v-model="radio4">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="medium">
          <el-radio-button label="上海" ></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled ></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      `.replace(/^ {8}/gm, '').trim(),
      radio4: '上海',
      codeStr5: `
      <div>
          <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
          <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
          <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio3" size="small">
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border disabled>备选项2</el-radio>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio4" size="mini" disabled>
            <el-radio label="1" border>备选项1</el-radio>
            <el-radio label="2" border>备选项2</el-radio>
          </el-radio-group>
        </div>
      `.replace(/^ {8}/gm, '').trim(),
      radio5: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>