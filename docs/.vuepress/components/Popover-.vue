<template>
    <div>
        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                 <el-popover
                    placement="top-start"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">hover 激活</el-button>
                </el-popover>

                <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="click"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">click 激活</el-button>
                </el-popover>

                <el-popover
                    ref="popover"
                    placement="right"
                    title="标题"
                    width="200"
                    trigger="focus"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                </el-popover>
                <el-button v-popover:popover>focus 激活</el-button>

                <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="manual"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                    v-model="visible">
                    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
                </el-popover>
                
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
        <!-- 嵌套信息 -->
        <div>
            <h3>嵌套信息</h3>
            <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-popover
                placement="right"
                width="400"
                trigger="click">
                <el-table :data="gridData">
                    <el-table-column width="150" property="date" label="日期"></el-table-column>
                    <el-table-column width="100" property="name" label="姓名"></el-table-column>
                    <el-table-column width="300" property="address" label="地址"></el-table-column>
                </el-table>
                <el-button slot="reference">click 激活</el-button>
                </el-popover>

                
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
        <!-- 嵌套操作 -->
        <div>
            <h3>嵌套操作</h3>
            <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量:</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-popover
                placement="top"
                width="160"
                v-model="visible">
                <p>这是一段内容这是一段内容确定删除吗？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                </div>
                <el-button slot="reference">删除</el-button>
                </el-popover>               
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
                <el-popover
                    placement="top-start"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">hover 激活</el-button>
                </el-popover>

                <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="click"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">click 激活</el-button>
                </el-popover>

                <el-popover
                    ref="popover"
                    placement="right"
                    title="标题"
                    width="200"
                    trigger="focus"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                </el-popover>
                <el-button v-popover:popover>focus 激活</el-button>

                <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="manual"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                    v-model="visible">
                    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
                </el-popover>
          
        `.replace(/^ {8}/gm, '').trim(),
        visible: false,
        codeStr2: `
               <el-popover
                placement="right"
                width="400"
                trigger="click">
                <el-table :data="gridData">
                    <el-table-column width="150" property="date" label="日期"></el-table-column>
                    <el-table-column width="100" property="name" label="姓名"></el-table-column>
                    <el-table-column width="300" property="address" label="地址"></el-table-column>
                </el-table>
                <el-button slot="reference">click 激活</el-button>
                </el-popover>         
        `.replace(/^ {8}/gm, '').trim(),
         gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        codeStr3: `
        <el-popover
            placement="top"
            width="160"
            v-model="visible">
            <p>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                 <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
             </div>
            <el-button slot="reference">删除</el-button>
        </el-popover>          
        `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>