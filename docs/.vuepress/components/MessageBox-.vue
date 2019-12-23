<template>
    <div>
        <!-- 消息提示 -->
        <div>
            <h3>消息提示</h3>
            <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="open">点击打开 Message Box</el-button>               
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
        <!-- 确认消息 -->
        <div>
            <h3>确认消息</h3>
            <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="open2">点击打开 Message Box</el-button>
                
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
        <!-- 提交内容 -->
        <div>
            <h3>提交内容</h3>
            <p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="open3">点击打开 Message Box</el-button>
                
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
        <!-- 自定义 -->
        <div>
            <h3>自定义</h3>
            <p>可自定义配置不同内容。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="open4">点击打开 Message Box</el-button>
                
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
        <!-- 使用 HTML 片段 -->
        <div>
            <h3>使用 HTML 片段</h3>
            <p>message 属性支持传入 HTML 片段。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="open5">点击打开 Message Box</el-button>
                
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
        <!-- 区分取消与关闭 -->
        <div>
            <h3>区分取消与关闭</h3>
            <p>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="open6">点击打开 Message Box</el-button>
                
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
        <!-- 居中布局 -->
        <div>
            <h3>居中布局</h3>
            <p>内容支持居中布局</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="open7">点击打开 Message Box</el-button>
                
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
         <el-button type="text" @click="open">点击打开 Message Box</el-button>        
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
         <el-button type="text" @click="open2">点击打开 Message Box</el-button>    
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
         <el-button type="text" @click="open3">点击打开 Message Box</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
         <el-button type="text" @click="open4">点击打开 Message Box</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5: `
         <el-button type="text" @click="open5">点击打开 Message Box</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr6: `
         <el-button type="text" @click="open6">点击打开 Message Box</el-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr7: `
         <el-button type="text" @click="open7">点击打开 Message Box</el-button>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
     methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
      open5() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      },
     open6() {
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: '保存修改'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '停留在当前页面'
            })
          });
      },
      open7() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }





     }
     
  
  }
</script>

<style lang="scss" scoped>
</style>