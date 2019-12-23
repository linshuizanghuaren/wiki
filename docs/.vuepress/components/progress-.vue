<template>
<div>
    <!-- 简单用法 -->
    <div>
      <h2>简单用法</h2>
      <p>预览</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-progress :percentage="50"></el-progress>
          <el-progress :percentage="100" :format="format"></el-progress>
          <el-progress :percentage="100" status="success"></el-progress>
          <el-progress :percentage="100" status="warning"></el-progress>
          <el-progress :percentage="50" status="exception"></el-progress>
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

    <!-- 百分比内显 -->
    <div>
      <h2>百分比内显</h2>
      <p>百分比不占用额外控件，适用于文件上传等场景。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
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

    <!-- 自定义颜色 -->
    <div>
      <h2>自定义颜色</h2>
      <p>可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-progress :percentage="percentage" :color="customColor"></el-progress>
          <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
          <el-progress :percentage="percentage" :color="customColors"></el-progress>
          <div>
            <el-button-group>
              <el-button icon="el-icon-minus" @click="decrease"></el-button>
              <el-button icon="el-icon-plus" @click="increase"></el-button>
            </el-button-group>
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

    <!-- 环形进度条 -->
    <div>
      <h2>环形进度条</h2>
      <p>Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-progress type="circle" :percentage="0"></el-progress>
          <el-progress type="circle" :percentage="25"></el-progress>
          <el-progress type="circle" :percentage="100" status="success"></el-progress>
          <el-progress type="circle" :percentage="70" status="warning"></el-progress>
          <el-progress type="circle" :percentage="50" status="exception"></el-progress>
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

    <!-- 仪表盘形进度条 -->
    <div>
      <h2>仪表盘形进度条</h2>
      <!-- <p>可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。</p> -->
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-progress type="dashboard" :percentage="percentageTwo" :color="colors"></el-progress>
          <div>
            <el-button-group>
              <el-button icon="el-icon-minus" @click="decreaseTwo"></el-button>
              <el-button icon="el-icon-plus" @click="increaseTwo"></el-button>
            </el-button-group>
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
            <el-progress :percentage="50"></el-progress>
            <el-progress :percentage="100" :format="format"></el-progress>
            <el-progress :percentage="100" status="success"></el-progress>
            <el-progress :percentage="100" status="warning"></el-progress>
            <el-progress :percentage="50" status="exception"></el-progress>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2:`
            <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3:`
            <el-progress :percentage="percentage" :color="customColor"></el-progress>
            <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
            <el-progress :percentage="percentage" :color="customColors"></el-progress>
            <div>
              <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
              </el-button-group>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        codeStr4:`
            <el-progress type="circle" :percentage="0"></el-progress>
            <el-progress type="circle" :percentage="25"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="70" status="warning"></el-progress>
            <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        `.replace(/^ {8}/gm, '').trim(),

        codeStr5:`
            <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
            <div>
              <el-button-group>
                <el-button icon="el-icon-minus" @click="decrease"></el-button>
                <el-button icon="el-icon-plus" @click="increase"></el-button>
              </el-button-group>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        percentageTwo: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]


      }
    },
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      },
      increaseTwo() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decreaseTwo() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>