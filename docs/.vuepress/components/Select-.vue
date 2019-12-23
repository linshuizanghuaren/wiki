<template>
<div>
  <!-- 基础用法 -->
  <div>
    <h2>基础用法</h2>
    <p> 适用广泛的基础单选</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>     
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
  <!-- 有禁用选项 -->
   <div>
    <h2>有禁用选项</h2>
    <p> 选择器不可用状态</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
         <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>  
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
  <!-- 可清空单选 -->
   <div>
    <h2>可清空单选</h2>
    <p> 包含清空按钮，可将选择器清空为初始状态</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
         <el-select v-model="value4" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
  
  <!-- 基础多选 -->
   <div>
    <h2>基础多选</h2>
    <p> 适用性较广的基础多选，用 Tag 展示已选项</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
         <el-select v-model="value5" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select
        v-model="value11"
        multiple
        collapse-tags
        style="margin-left: 20px;"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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

  <!-- 自定义模板 -->
   <div>
    <h2>自定义模板</h2>
    <p> 可以自定义备选项</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
         <el-select v-model="value6" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
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
   <!-- 分组 -->
   <div>
    <h2>分组</h2>
    <p> 备选项进行分组展示</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
         <el-select v-model="value7" placeholder="请选择">
          <el-option-group
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
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
  <!-- 可搜索 -->
  <div>
    <h2>可搜索</h2>
    <p> 可以利用搜索功能快速查找选项</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
         <el-select v-model="value8" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="code-content"
           v-highlight
           style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr7}}</code></pre>
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
  <!-- 创建条目 -->
  <div>
    <h2>创建条目</h2>
    <p> 可以创建并选中选项中不存在的条目</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
         <el-select
          v-model="value10"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签">
          <el-option
            v-for="item in options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="code-content"
           v-highlight
           style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr8}}</code></pre>
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
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>         
        `.replace(/^ {8}/gm, '').trim(),
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        codeStr2: `
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>         
        `.replace(/^ {8}/gm, '').trim(),
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: '',
        codeStr3: `
        <el-select v-model="value4" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>    
        `.replace(/^ {8}/gm, '').trim(),
        value4: '',
        codeStr4: `
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select
          v-model="value11"
          multiple
          collapse-tags
          style="margin-left: 20px;"
          placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        `.replace(/^ {8}/gm, '').trim(),
        value5: [],
        value11: [],
        codeStr5: `
        <el-select v-model="value6" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
        `.replace(/^ {8}/gm, '').trim(),
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value6: '',
        codeStr6:`
        <el-select v-model="value7" placeholder="请选择">
          <el-option-group
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
        `.replace(/^ {8}/gm, '').trim(),
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
          }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
          }],
          value7: '',
          codeStr7:`
            <el-select v-model="value8" filterable placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select>
        `.replace(/^ {8}/gm, '').trim(),
        value8: '',
        codeStr8:`
            <el-select
          v-model="value10"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签">
          <el-option
            v-for="item in options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        `.replace(/^ {8}/gm, '').trim(),
         options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>