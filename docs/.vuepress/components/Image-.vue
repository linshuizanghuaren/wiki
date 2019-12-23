<template>
    <div>
        <!-- 基础用法 -->
        <div>
          <h3>基础用法</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-image">
                    <div class="block" v-for="fit in fits" :key="fit">
                        <span class="demonstration">{{ fit }}</span>
                        <el-image
                        style="width: 100px; height: 100px"
                        :src="url"
                        :fit="fit"></el-image>
                    </div>
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
        <!-- 占位内容 -->
        <div>
          <h3>占位内容</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-image">
                    <div class="demo-image__placeholder">
                        <div class="block">
                            <span class="demonstration">默认</span>
                            <el-image :src="src"></el-image>
                        </div>
                        <div class="block">
                            <span class="demonstration">自定义</span>
                            <el-image :src="src">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                            </el-image>
                        </div>
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
        <!-- 加载失败 -->
        <div>
          <h3>加载失败</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-image__error">
                    <div class="block">
                        <span class="demonstration">默认</span>
                        <el-image></el-image>
                    </div>
                    <div class="block">
                        <span class="demonstration">自定义</span>
                        <el-image>
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                        </el-image>
                    </div>
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
        <!-- 懒加载 -->
        <div>
          <h3>懒加载</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-image__lazy">
                    <el-image v-for="url in urls2" :key="url" :src="url" lazy></el-image>
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
        <!-- 大图预览 -->
        <div>
          <h3>大图预览</h3>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="demo-image">
                    <div class="demo-image__placeholder">
                        <div class="demo-image__error">
                            <div class="demo-image__preview">
                                <el-image 
                                    style="width: 100px; height: 100px"
                                    :src="url" 
                                    :preview-src-list="srcList">
                                </el-image>
                            </div>
                        </div>
                    </div>
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
            <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"></el-image>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        codeStr2: `
            <div class="block">
                <span class="demonstration">默认</span>
                <el-image :src="src"></el-image>
            </div>
            <div class="block">
                 <span class="demonstration">自定义</span>
                            <el-image :src="src">
                <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                </div>
                </el-image>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        codeStr3: `
            <div class="demo-image__error">
                    <div class="block">
                        <span class="demonstration">默认</span>
                        <el-image></el-image>
                    </div>
                    <div class="block">
                        <span class="demonstration">自定义</span>
                        <el-image>
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                        </el-image>
                    </div>
                </div>  
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <div class="demo-image__lazy">
                <el-image v-for="url in urls2" :key="url" :src="url" lazy></el-image>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        urls2: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ],
        codeStr5: `
            <div class="demo-image__preview">
                <el-image 
                    style="width: 100px; height: 100px"
                    :src="url" 
                    :preview-src-list="srcList">
                </el-image>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
        
      }
    }
  }
</script>

<style lang="scss" scoped>
.demo-image .block, .demo-image__error .block, .demo-image__placeholder .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}
.demo-image__error .block, .demo-image__placeholder .block {
    width: 49%;
}
.demo-image__error .el-image, .demo-image__placeholder .el-image {
    width: 300px;
    height: 200px;
}
.demo-image .demonstration, .demo-image__error .demonstration, .demo-image__placeholder .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
// 加载失败
.el-image__error {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #c0c4cc;
    vertical-align: middle;
}
.el-image__error, .el-image__placeholder {
    background: #f5f7fa;
}
.el-image .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;
    font-size: 14px;
}
.demo-image__error .image-slot {
    font-size: 30px;
}

// 懒加载
.demo-image__lazy {
    height: 400px;
    overflow-y: auto;
}
</style>