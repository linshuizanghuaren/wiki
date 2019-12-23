<template>
  <div>

      <!-- 简单用法 -->
      <div>
        <h2>简单用法</h2>
        <!-- <p>预览</p> -->
        <div class="component-wrapper">
          <div class="component-wrapper-demo">
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
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

      <!-- 可移除标签 -->
      <div>
        <h2>可移除标签</h2>
        <!-- <p>预览</p> -->
        <div class="component-wrapper">
          <div class="component-wrapper-demo">
              <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                :type="tag.type">
                {{tag.name}}
              </el-tag>
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

      <!-- 动态编辑标签 -->
      <div>
        <h2>动态编辑标签</h2>
        <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</p>
        <div class="component-wrapper">
          <div class="component-wrapper-demo">
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
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

      <!-- 不同尺寸 -->
      <div>
        <h2>不同尺寸</h2>
        <p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
        <div class="component-wrapper">
          <div class="component-wrapper-demo">
              <el-tag closable>默认标签</el-tag>
              <el-tag size="medium" closable>中等标签</el-tag>
              <el-tag size="small" closable>小型标签</el-tag>
              <el-tag size="mini" closable>超小标签</el-tag>
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

      <!-- 不同主题 -->
      <div>
        <h2>不同主题</h2>
        <p>Tag 组件提供了三个不同的主题：dark、light 和 plain</p>
        <div class="component-wrapper">
          <div class="component-wrapper-demo">
              <div class="tag-group">
                <span class="tag-group__title">Dark</span>
                <el-tag
                  v-for="item in items"
                  :key="item.label"
                  :type="item.type"
                  effect="dark">
                  {{ item.label }}
                </el-tag>
              </div>
              <div class="tag-group">
                <span class="tag-group__title">Plain</span>
                <el-tag
                  v-for="item in items"
                  :key="item.label"
                  :type="item.type"
                  effect="plain">
                  {{ item.label }}
                </el-tag>
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
    data() {
      return {
        codeStr: `
          <el-tag>标签一</el-tag>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        `.replace(/^ {8}/gm, '').trim(),
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        codeStr2:`
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              :type="tag.type">
              {{tag.name}}
            </el-tag>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3:`
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        codeStr4:`
            <el-tag closable>默认标签</el-tag>
            <el-tag size="medium" closable>中等标签</el-tag>
            <el-tag size="small" closable>小型标签</el-tag>
            <el-tag size="mini" closable>超小标签</el-tag>
        `.replace(/^ {8}/gm, '').trim(),
        items: [
          { type: '', label: '标签一' },
          { type: 'success', label: '标签二' },
          { type: 'info', label: '标签三' },
          { type: 'danger', label: '标签四' },
          { type: 'warning', label: '标签五' }
        ],
        codeStr5:`
            <div class="tag-group">
              <span class="tag-group__title">Dark</span>
              <el-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                effect="dark">
                {{ item.label }}
              </el-tag>
            </div>
            <div class="tag-group">
              <span class="tag-group__title">Plain</span>
              <el-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                effect="plain">
                {{ item.label }}
              </el-tag>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>