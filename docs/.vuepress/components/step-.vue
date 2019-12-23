<template>
    <div>
        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>简单的步骤条。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-steps :active="active" finish-status="success">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3"></el-step>
                </el-steps>
                <el-button style="margin-top: 12px;" @click="next">下一步</el-button>              
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
        <!-- 含状态步骤条 -->
        <div>
            <h3>含状态步骤条</h3>
            <p>每一步骤显示出该步骤的状态。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-steps :space="200" :active="1" finish-status="success">
                    <el-step title="已完成"></el-step>
                    <el-step title="进行中"></el-step>
                    <el-step title="步骤 3"></el-step>
                </el-steps>         
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
        <!-- 有描述的步骤条 -->
        <div>
            <h3>有描述的步骤条</h3>
            <p>每个步骤有其对应的步骤状态描述。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-steps :active="1">
                    <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤 3" description="这段就没那么长了"></el-step>
                </el-steps>        
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
        <!-- 居中的步骤条 -->
        <div>
            <h3>居中的步骤条</h3>
            <p>标题和描述都将居中。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-steps :active="2" align-center>
                    <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>       
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
        <!-- 带图标的步骤条 -->
        <div>
            <h3>带图标的步骤条</h3>
            <p>步骤条内可以启用各种自定义的图标。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-steps :active="1">
                    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                    <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                    <el-step title="步骤 3" icon="el-icon-picture"></el-step>
                </el-steps>      
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
        <!-- 竖式步骤条 -->
        <div>
            <h3>竖式步骤条</h3>
            <p>竖直方向的步骤条。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div style="height: 300px;">
                    <el-steps direction="vertical" :active="1">
                        <el-step title="步骤 1"></el-step>
                        <el-step title="步骤 2"></el-step>
                        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
                    </el-steps>
                </div>     
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
        <!-- 简洁风格的步骤条 -->
        <div>
            <h3>简洁风格的步骤条</h3>
            <p>设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                    <el-steps :active="1" simple>
                        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
                    </el-steps>
                    <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                        <el-step title="步骤 1" ></el-step>
                        <el-step title="步骤 2" ></el-step>
                        <el-step title="步骤 3" ></el-step>
                    </el-steps> 
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
            <el-steps :active="active" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>        
        `.replace(/^ {8}/gm, '').trim(),
        active: 0,
        codeStr2: `
            <el-steps :space="200" :active="1" finish-status="success">
                <el-step title="已完成"></el-step>
                <el-step title="进行中"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>     
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
            <el-steps :active="1">
                <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤 3" description="这段就没那么长了"></el-step>
            </el-steps>     
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <el-steps :active="2" align-center>
                <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>     
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5: `
            <el-steps :active="1">
                <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                <el-step title="步骤 3" icon="el-icon-picture"></el-step>
            </el-steps>    
        `.replace(/^ {8}/gm, '').trim(),
        codeStr6: `
            <div style="height: 300px;">
                 <el-steps direction="vertical" :active="1">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>
            </div>   
        `.replace(/^ {8}/gm, '').trim(),
         codeStr7: `
            <el-steps :active="1" simple>
                <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                <el-step title="步骤 2" icon="el-icon-upload"></el-step>
                <el-step title="步骤 3" icon="el-icon-picture"></el-step>
            </el-steps>
            <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                <el-step title="步骤 1" ></el-step>
                <el-step title="步骤 2" ></el-step>
                <el-step title="步骤 3" ></el-step>
            </el-steps>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>