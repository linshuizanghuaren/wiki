<template>
    <div>
        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>适用广泛的基础用法</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                 <div class="block">
                    <span class="demonstration">默认 Hover 指示器触发</span>
                    <el-carousel height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="block">
                    <span class="demonstration">Click 指示器触发</span>
                    <el-carousel trigger="click" height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                    </el-carousel>
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
        <!-- 指示器 -->
        <div>
            <h3>指示器</h3>
            <p>可以将指示器的显示位置设置在容器外部</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                 <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                
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
         <!-- 切换箭头 -->
        <div>
            <h3>切换箭头</h3>
            <p>可以设置切换箭头的显示时机</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                 <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                
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
        <!-- 卡片化 -->
        <div>
            <h3>卡片化</h3>
            <p>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                 <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                
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
        <!-- 方向 -->
        <div>
            <h3>方向</h3>
            <p>默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                 <el-carousel height="200px" direction="vertical" :autoplay="false">
                    <el-carousel-item v-for="item in 3" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
                
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
                <el-carousel height="150px">
                <span class="demonstration">默认 Hover 指示器触发</span>
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
                </el-carousel>
            </div>
            <div class="block">
                <span class="demonstration">Click 指示器触发</span>
                <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
                </el-carousel>
            </div>          
        `.replace(/^ {8}/gm, '').trim(),
         codeStr2: `
             <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>         
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
             <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>        
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
             <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>       
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5: `
             <el-carousel height="200px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in 3" :key="item">
                <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>     
        `.replace(/^ {8}/gm, '').trim()


      }
    }
  }
</script>

<style lang="scss" scoped>
 .block {
    padding: 30px;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
}
// 未生效
 .el-carousel__container {
    text-align: center;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>