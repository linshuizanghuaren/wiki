<template>
    <div>
      <!-- 基本 -->
        <div>
          <h3>基本</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-calendar v-model="value">
                </el-calendar>             
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
        <!-- 自定义内容 -->
        <div>
          <h3>自定义内容</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-calendar>
                    <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                    <template
                        slot="dateCell"
                        slot-scope="{date, data}">
                        <p :class="data.isSelected ? 'is-selected' : ''">
                        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                        </p>
                    </template>
                </el-calendar>           
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
        <!-- 自定义范围 -->
        <div>
          <h3>自定义范围</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-calendar :range="['2019-03-04', '2019-03-24']"></el-calendar>          
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
        <el-calendar v-model="value"></el-calendar>    
        `.replace(/^ {8}/gm, '').trim(),
        value: new Date(),
        codeStr2: `
        <el-calendar>
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template
                slot="dateCell"
                slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                </p>
            </template>
        </el-calendar> 
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
        <el-calendar :range="['2019-03-04', '2019-03-24']"></el-calendar>     
        `.replace(/^ {8}/gm, '').trim(),
        value: new Date(),
        
      }
    }
  }
</script>

<style lang="scss" scoped>
.is-selected {
    color: #1989FA;
  }
</style>