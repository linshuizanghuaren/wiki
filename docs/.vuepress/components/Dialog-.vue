<template>
    <div>
        <!-- 基本用法 -->
        <div>
            <h3>基本用法</h3>
            <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
                    <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose">
                        <span>这是一段信息</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                    </el-dialog>
                
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
            <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。</p>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <!-- Table -->
                    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

                    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
                    <el-table :data="gridData">
                        <el-table-column property="date" label="日期" width="150"></el-table-column>
                        <el-table-column property="name" label="姓名" width="200"></el-table-column>
                        <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                    </el-dialog>

                    <!-- Form -->
                    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                    </el-dialog>
                
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
        <!-- 嵌套的 Dialog -->
        <div>
            <h3>嵌套的 Dialog</h3>
            <p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
                    <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
                        <el-dialog
                        width="30%"
                        title="内层 Dialog"
                        :visible.sync="innerVisible"
                        append-to-body>
                        </el-dialog>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="outerVisible = false">取 消</el-button>
                            <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
                        </div>
                    </el-dialog>          
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
        <!-- 居中布局-->
        <div>
            <h3>居中布局</h3>
            <p>标题和底部可水平居中</p>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
                    <el-dialog
                        title="提示"
                        :visible.sync="centerDialogVisible"
                        width="30%"
                        center>
                        <span>需要注意的是内容是默认不居中的</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                        </span>
                    </el-dialog>        
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
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>         
        `.replace(/^ {8}/gm, '').trim(),
        dialogVisible: false,
        codeStr2: `
        <!-- Table -->
        <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
             <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
        </el-dialog>

        <!-- Form -->
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-form-item>
         </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>      
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
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        codeStr3: `
            <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
            <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
                <el-dialog
                width="30%"
                title="内层 Dialog"
                :visible.sync="innerVisible"
                append-to-body>
                </el-dialog>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="outerVisible = false">取 消</el-button>
                    <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
                </div>
            </el-dialog>         
        `.replace(/^ {8}/gm, '').trim(),
        outerVisible: false,
        innerVisible: false,
        codeStr4: `
            <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
            <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <span>需要注意的是内容是默认不居中的</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>       
        `.replace(/^ {8}/gm, '').trim(),
        centerDialogVisible: false

      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>