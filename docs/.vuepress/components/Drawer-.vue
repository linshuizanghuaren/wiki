<template>
    <div>
        <!-- 基础用法 -->
        <div>
          <h3>基础用法</h3>
          <p></p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-radio-group v-model="direction">
                    <el-radio label="ltr">从左往右开</el-radio>
                    <el-radio label="rtl">从右往左开</el-radio>
                    <el-radio label="ttb">从上往下开</el-radio>
                    <el-radio label="btt">从下往上开</el-radio>
                </el-radio-group>

                <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                    点我打开
                </el-button>

                <el-drawer
                    title="我是标题"
                    :visible.sync="drawer"
                    :direction="direction"
                    :before-close="handleClose">
                    <span>我来啦!</span>
                </el-drawer>
                      
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
          <p>和 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button type="text" @click="table = true">打开嵌套表格的 Drawer</el-button>
                <el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>
                <el-drawer
                title="我嵌套了表格!"
                :visible.sync="table"
                direction="rtl"
                size="50%">
                <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                </el-drawer>

                <el-drawer
                title="我嵌套了 Form !"
                :before-close="handleClose2"
                :visible.sync="dialog"
                direction="ltr"
                custom-class="demo-drawer"
                ref="drawer"
                >
                <div class="demo-drawer__content">
                    <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-form>
                    <div class="demo-drawer__footer">
                    <el-button @click="dialog = false">取 消</el-button>
                    <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
                    </div>
                </div>
                </el-drawer>
                      
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
        <!-- 多层嵌套 -->
        <div>
          <h3>多层嵌套</h3>
          <p>Drawer 组件也拥有多层嵌套的方法</p>
          <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                点我打开
                </el-button>

                <el-drawer
                title="我是外面的 Drawer"
                :visible.sync="drawer"
                size="50%">
                <div>
                <el-button @click="innerDrawer = true">打开里面的!</el-button>
                <el-drawer
                    title="我是里面的"
                    :append-to-body="true"
                    :before-close="handleClose3"
                    :visible.sync="innerDrawer">
                    <p>_(:зゝ∠)_</p>
                </el-drawer>
                </div>
                </el-drawer>
                      
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
        <el-radio-group v-model="direction">
            <el-radio label="ltr">从左往右开</el-radio>
            <el-radio label="rtl">从右往左开</el-radio>
            <el-radio label="ttb">从上往下开</el-radio>
            <el-radio label="btt">从下往上开</el-radio>
        </el-radio-group>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
        </el-button>
        <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose">
            <span>我来啦!</span>
        </el-drawer> 
        `.replace(/^ {8}/gm, '').trim(),
        drawer: false,
        direction: 'rtl',
        codeStr2: `
                <el-button type="text" @click="table = true">打开嵌套表格的 Drawer</el-button>
                <el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>
                <el-drawer
                title="我嵌套了表格!"
                :visible.sync="table"
                direction="rtl"
                size="50%">
                <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                    </el-table>
                </el-drawer>

                <el-drawer
                title="我嵌套了 Form !"
                :before-close="handleClose2"
                :visible.sync="dialog"
                direction="ltr"
                custom-class="demo-drawer"
                ref="drawer"
                >
                <div class="demo-drawer__content">
                    <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    </el-form>
                    <div class="demo-drawer__footer">
                    <el-button @click="dialog = false">取 消</el-button>
                    <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
                    </div>
                </div>
                </el-drawer>
        `.replace(/^ {8}/gm, '').trim(),
         table: false,
      dialog: false,
      loading: false,
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
      formLabelWidth: '80px',
      codeStr3: `
         <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            点我打开
         </el-button>
        <el-drawer
        title="我是外面的 Drawer"
        :visible.sync="drawer"
        size="50%">
        <div>
        <el-button @click="innerDrawer = true">打开里面的!</el-button>
        <el-drawer
            title="我是里面的"
            :append-to-body="true"
            :before-close="handleClose3"
            :visible.sync="innerDrawer">
            <p>_(:зゝ∠)_</p>
        </el-drawer>
        </div>
        </el-drawer>
        `.replace(/^ {8}/gm, '').trim(),
        drawer: false,
        innerDrawer: false,
        
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleClose2(done) {
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            done();
          }, 2000);
        })
        .catch(_ => {});
    },
    handleClose3(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
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