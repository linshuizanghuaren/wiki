<template>
    <div>
        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>包含标题，内容和操作。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
                
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
        <!-- 简单卡片 -->
        <div>
            <h3>简单卡片</h3>
            <p>卡片可以只有内容区域。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-card class="box-card">
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
              
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
        <!-- 带图片 -->
        <div>
            <h3>带图片</h3>
            <p>可配置定义更丰富的内容展示。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-row>
                    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
              
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
        <!-- 卡片阴影 -->
        <div>
            <h3>卡片阴影</h3>
            <p>可对阴影的显示进行配置。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-row :gutter="12">
                    <el-col :span="8">
                        <el-card shadow="always">
                        总是显示
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover">
                        鼠标悬浮时显示
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="never">
                        从不显示
                        </el-card>
                    </el-col>
                </el-row>
              
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
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                 <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                 {{'列表内容 ' + o }}
            </div>
        </el-card>         
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
        <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>       
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
        <el-row>
             <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                     <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                 </div>
                </el-card>
             </el-col>
        </el-row>      
        `.replace(/^ {8}/gm, '').trim(),
        currentDate: new Date(),
        codeStr4: `
        <el-row :gutter="12">
            <el-col :span="8">
                <el-card shadow="always">
                总是显示
                </el-card>
             </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                鼠标悬浮时显示
                </el-card>
             </el-col>
            <el-col :span="8">
                <el-card shadow="never">
                从不显示
                </el-card>
            </el-col>
        </el-row>
        `.replace(/^ {8}/gm, '').trim(),
        
      }
    }
  }
</script>

<style lang="scss" scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>