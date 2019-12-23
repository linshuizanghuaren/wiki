<template>
    <div>

        <!-- 基本用法 -->
        <div>
            <h3>基本用法</h3>
            <p>通过 shape 和 size 设置头像的形状和大小。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-row class="demo-avatar demo-basic">
                    <el-col :span="12">
                        <div class="sub-title">circle</div>
                        <div class="demo-basic--circle">
                            <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                            <div class="block" v-for="size in sizeList" :key="size">
                            <el-avatar :size="size" :src="circleUrl"></el-avatar>
                            </div>
                        </div>
                    </el-col>  
                    <el-col :span="12">
                        <div class="sub-title">square</div>
                        <div class="demo-basic--circle">
                            <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
                            <div class="block" v-for="size in sizeList" :key="size">
                            <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                            </div>
                        </div>
                    </el-col> 
                </el-row>
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
        <!-- 展示类型 -->
        <div>
            <h3>展示类型</h3>
            <p>支持三种类型：图标、图片和字符</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-type">
                    <div>
                        <el-avatar icon="el-icon-user-solid"></el-avatar>
                    </div>
                    <div>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </div>
                    <div>
                        <el-avatar> user </el-avatar>
                    </div>
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
        <!-- 图片加载失败的 fallback 行为 -->
        <div>
            <h3>图片加载失败的 fallback 行为</h3>
            <p>当展示类型为图片的时候，图片加载失败的 fallback 行为</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-type">
                    <el-avatar :size="60" src="https://empty" @error="errorHandler">
                    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                    </el-avatar>
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
        <!-- 图片如何适应容器框 -->
        <div>
            <h3>图片如何适应容器框</h3>
            <p>当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-fit">
                    <div class="block" v-for="fit in fits" :key="fit">
                        <span class="title">{{ fit }}</span>
                        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
                    </div>
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
            <el-row class="demo-avatar demo-basic">
                <el-col :span="12">
                <div class="sub-title">circle</div>
                <div class="demo-basic--circle">
                    <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                    <div class="block" v-for="size in sizeList" :key="size">
                    <el-avatar :size="size" :src="circleUrl"></el-avatar>
                    </div>
                </div>
                </el-col>  
                <el-col :span="12">
                <div class="sub-title">square</div>
                <div class="demo-basic--circle">
                    <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
                    <div class="block" v-for="size in sizeList" :key="size">
                    <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                    </div>
                </div>
                </el-col> 
            </el-row>
        `.replace(/^ {8}/gm, '').trim(),
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        codeStr2: `
            <div class="demo-type">
                <div>
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                </div>
                <div>
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>
                <div>
                    <el-avatar> user </el-avatar>
                </div>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
            <div class="demo-type">
                <el-avatar :size="60" src="https://empty" @error="errorHandler">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                </el-avatar>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <div class="demo-fit">
                <div class="block" v-for="fit in fits" :key="fit">
                    <span class="title">{{ fit }}</span>
                    <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
                </div>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    methods: {
        //图片加载失败
        errorHandler() {
            return true
        }
    }
  }
</script>

<style lang="scss">
.demo-type,.demo-basic--circle,.demo-fit{
    display:flex;
    justify-content: space-around;
}
</style>