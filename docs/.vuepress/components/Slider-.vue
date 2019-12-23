<template>
<div>
    <!-- 基础用法 -->
    <div>
        <h3>基础用法</h3>
        <p>在拖动滑块时，显示当前值</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div class="block">
                    <span class="demonstration">默认</span>
                    <el-slider v-model="value1"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">自定义初始值</span>
                    <el-slider v-model="value2"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">隐藏 Tooltip</span>
                    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">格式化 Tooltip</span>
                    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">禁用</span>
                    <el-slider v-model="value5" disabled></el-slider>
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
    <!-- 离散值 -->
    <div>
        <h3>离散值</h3>
        <p>选项可以是离散的</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div class="block">
                <span class="demonstration">不显示间断点</span>
                <el-slider
                v-model="value6"
                :step="10">
                </el-slider>
            </div>
            <div class="block">
                <span class="demonstration">显示间断点</span>
                <el-slider
                v-model="value7"
                :step="10"
                show-stops>
                </el-slider>
            </div>
            
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
    <!-- 带有输入框 -->
    <div>
        <h3>带有输入框</h3>
        <p>通过输入框设置精确数值</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
           <div class="block">
            <el-slider
            v-model="value8"
            show-input>
            </el-slider>
            </div>
            
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
    <!-- 范围选择 -->
    <div>
        <h3>范围选择</h3>
        <p>支持选择某一数值范围</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
           <div class="block">
                <el-slider
                v-model="value9"
                range
                show-stops
                :max="10">
                </el-slider>
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
    <!-- 竖向模式 -->
    <div>
        <h3>竖向模式</h3>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
           <div class="block">
                <el-slider
                v-model="value10"
                vertical
                height="200px">
                </el-slider>
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
    mixins: [mixin],
    components: {
      CIcon
    },
    data() {
      return {
        codeStr: `
          <div class="block">
                <span class="demonstration">默认</span>
                <el-slider v-model="value1"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">自定义初始值</span>
                <el-slider v-model="value2"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">隐藏 Tooltip</span>
                <el-slider v-model="value3" :show-tooltip="false"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">格式化 Tooltip</span>
                <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">禁用</span>
                <el-slider v-model="value5" disabled></el-slider>
            </div>         
        `.replace(/^ {8}/gm, '').trim(),
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        codeStr2: `
          <div class="block">
                <span class="demonstration">不显示间断点</span>
                <el-slider
                v-model="value6"
                :step="10">
                </el-slider>
            </div>
            <div class="block">
                <span class="demonstration">显示间断点</span>
                <el-slider
                v-model="value7"
                :step="10"
                show-stops>
                </el-slider>
            </div>          
        `.replace(/^ {8}/gm, '').trim(),
        value6: 0,
        value7: 0,
        codeStr3: `
          <div class="block">
            <el-slider
            v-model="value8"
            show-input>
            </el-slider>
          </div>
        `.replace(/^ {8}/gm, '').trim(),
         value8: 0,
         codeStr4: `
          <div class="block">
                <el-slider
                v-model="value9"
                range
                show-stops
                :max="10">
                </el-slider>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        value9: [4, 8],
        codeStr5: `
          <div class="block">
                <el-slider
                v-model="value10"
                vertical
                height="200px">
                </el-slider>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        value10: 0
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>