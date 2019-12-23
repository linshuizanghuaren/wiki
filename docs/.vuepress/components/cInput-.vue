<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <p>可使用 v-model 实现数据的双向绑定。<br />可直接设置 width 来设置输入框的宽度，默认 100%。<br />可直接设置 error 来改变输入框的hover focus样式</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   placeholder="请输入..."
                   :width='200'></c-input>
          <c-input v-model="value1"
                   placeholder="请输入..."
                   :width='200'
                   error='error'></c-input>
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
    <!-- 尺寸 -->
    <div>
      <h3>尺寸</h3>
      <p>Input 组件可以在不同场景下选择合适的尺寸。<br />尺寸选项：large、default、small，通过设置size属性来配置它们。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   size="large"
                   :width="200"
                   placeholder="large"></c-input>
          <c-input v-model="value1"
                   size="default"
                   :width="200"
                   placeholder="default"></c-input>
          <c-input v-model="value1"
                   size="small"
                   :width="200"
                   placeholder="small"></c-input>
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
    <!-- 禁用 -->
    <div>
      <h3>禁用</h3>
      <p>通过添加disabled属性可设置为不可用状态</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   :width="200"
                   disabled></c-input>
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
    <!-- 清空 -->
    <div>
      <h3>清空</h3>
      <p>通过添加clearable属性可设置带清空按钮的功能。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   :width="200"
                   clearable></c-input>
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
    <!-- 密码框 -->
    <div>
      <h3>密码框</h3>
      <p>通过添加show-password可得到一个可切换显示隐藏的密码框。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   :width="200"
                   show-password></c-input>
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
    <!-- icon -->
    <div>
      <h3>icon</h3>
      <p>通过添加prefix、suffix属性可设置带前面带icon的样式 prefix设置显示在前 suffix设置显示在后。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   :width="200"
                   :prefix="icon"></c-input>
          <c-input v-model="value1"
                   :width="200"
                   :suffix="icon"></c-input>
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
    <!-- label属性的两种样式 -->
    <div>
      <h3>label属性的两种样式</h3>
      <p>通过设置label、fixed属性 设置带文字描述的input组合组件 <br />fixed为false时可设置通过width来设置input框的宽度，labelWidth设置label文字的宽度（不设置labelWidth时，文字宽度默认自适应）<br />fixed为true时可设置通过width来设置 整体input 的宽度(整体宽度默认100%)，labelWidth设置label文字的宽度（不设置labelWidth时，文字宽度默认自适应）</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   label="姓名"
                   :label-width="labelWidth"
                   :width="200"
                   placeholder="请输入..."></c-input>
          <c-input v-model="value1"
                   label="密码"
                   :label-width="labelWidth"
                   :width="200"
                   type="password"
                   placeholder="请输入..."></c-input>
          <br /> <br />
          <c-input v-model="value1"
                   label="姓名"
                   width="200"
                   fixed
                   placeholder="请输入..."></c-input>
          <c-input v-model="value1"
                   label="密码"
                   :label-width="labelWidth"
                   width="200"
                   fixed
                   placeholder="请输入..."></c-input>
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
    <!-- textarea1 -->
    <div>
      <h3>textarea</h3>
      <p>通过设置属性 type 为 textarea 来使用文本域，用于多行输入。 通过设置属性 rows 控制文本域默认显示的行数， 默认2行。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   :width="200"
                   type="textarea"></c-input>
          <c-input v-model="value1"
                   :width="200"
                   type="textarea"
                   :rows="4"></c-input>
          <c-input v-model="value1"
                   :width="200"
                   type="textarea"
                   :rows="4"
                   disabled></c-input>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr7}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
             @click="showCode(7)"
             ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[7] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[7] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- textarea2 -->
    <div>
      <h3>textarea</h3>
      <p>设置属性autosize，文本域会自动适应高度的变化。autosize也可以设定为一个对象，指定最小行数和最大行数。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <c-input v-model="value1"
                   :width="200"
                   type="textarea"
                   error
                   :autosize="autosize"></c-input>
          <c-input v-model="value1"
                   :width="200"
                   type="textarea"
                   :autosize="{minRows: 2,maxRows: 5}"></c-input>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr8}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
             @click="showCode(8)"
             ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[8] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[8] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixin from '../mixin'
import CInput from '../../../src/input/index'
import CIcon from '../../../src/icon/icon'
export default {
  mixins: [mixin],
  components: {
    CIcon,
    CInput
  },
  data () {
    return {
      value1: '',
      labelWidth: 50,
      autosize: false,
      icon: 'el-icon-orange',
      codeStr0: `
      <c-input v-model="value1" placeholder="请输入..." :width='200'></c-input>
        <c-input v-model="value1" placeholder="请输入..." :width='200' error='error'></c-input>
      `.replace(/^ {8}/gm, '').trim(),
      codeStr1: `
          <c-input v-model="value1" size="large" :width="200" placeholder="large"></c-input>
        <c-input v-model="value1" size="default" :width="200" placeholder="default"></c-input>
        <c-input v-model="value1" size="small" :width="200" placeholder="small"></c-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr2: `
        <c-input v-model="value1" :width="200" disabled></c-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr3: `
        <c-input v-model="value1" :width="200" clearable></c-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr4: `
         <c-input v-model="value1" :width="200" show-password></c-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr5: `
        <c-input v-model="value1" :width="200" :prefix="icon"></c-input>
        <c-input v-model="value1" :width="200" :suffix="icon"></c-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr6: `
        <c-input v-model="value1" label="姓名" :label-width="labelWidth" :width="200" placeholder="请输入..."></c-input>
        <c-input v-model="value1" label="密码" :label-width="labelWidth" :width="200" type="password" placeholder="请输入..."></c-input>
        <br /> <br />
        <c-input v-model="value1" label="姓名" width="200" fixed placeholder="请输入..."></c-input>
        <c-input v-model="value1" label="密码" :label-width="labelWidth" width="200" fixed placeholder="请输入..."></c-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr7: `
        <c-input v-model="value1" :width="200" type="textarea"></c-input>
        <c-input v-model="value1" :width="200" type="textarea" :rows="4"></c-input>
        <c-input v-model="value1" :width="200" type="textarea" :rows="4" disabled></c-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr8: `
        c-input v-model="value1" :width="200" type="textarea" error :autosize="autosize"></c-input>
        <c-input v-model="value1" :width="200" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></c-input>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>