<template>
    <div>
        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>预览</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="block">
                    <span class="demonstration">页数较少时的效果</span>
                    <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                    </el-pagination>
                </div>
                <div class="block">
                    <span class="demonstration">大于 7 页时的效果</span>
                    <el-pagination
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
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
        <!-- 设置最大页码按钮数 -->
        <div>
            <h3>设置最大页码按钮数</h3>
            <p>预览</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-pagination
                    :page-size="20"
                    :pager-count="11"
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
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
        <!-- 带有背景色的分页 -->
        <div>
            <h3>带有背景色的分页</h3>
            <p>预览</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
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
        <!-- 小型分页 -->
        <div>
            <h3>小型分页</h3>
            <p>在空间有限的情况下，可以使用简单的小型分页。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-pagination
                    small
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>
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
        <!-- 附加功能 -->
        <div>
            <h3>附加功能</h3>
            <p>根据场景需要，可以添加其他功能模块。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="block">
                    <span class="demonstration">显示总数</span>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                    </el-pagination>
                </div>
                <div class="block">
                    <span class="demonstration">调整每页显示条数</span>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage2"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="sizes, prev, pager, next"
                    :total="1000">
                    </el-pagination>
                </div>
                <div class="block">
                    <span class="demonstration">直接前往</span>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                    </el-pagination>
                </div>
                <div class="block">
                    <span class="demonstration">完整功能</span>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
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
        <!-- 当只有一页时隐藏分页 -->
        <div>
            <h3>当只有一页时隐藏分页</h3>
            <p>当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div>
                    <el-switch v-model="value">
                    </el-switch>
                    <el-pagination
                        :hide-on-single-page="value"
                        :total="5"
                        layout="prev, pager, next">
                    </el-pagination>
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
                <span class="demonstration">页数较少时的效果</span>
                <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>
            </div>
            <div class="block">
                <span class="demonstration">大于 7 页时的效果</span>
                <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <el-pagination
                small
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5: `
            <div class="block">
                <span class="demonstration">显示总数</span>
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
            <div class="block">
                <span class="demonstration">调整每页显示条数</span>
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage2"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="sizes, prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
            <div class="block">
                <span class="demonstration">直接前往</span>
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
                </el-pagination>
            </div>
            <div class="block">
                <span class="demonstration">完整功能</span>
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        codeStr6: `
            <div>
                <el-switch v-model="value">
                </el-switch>
                <el-pagination
                    :hide-on-single-page="value"
                    :total="5"
                    layout="prev, pager, next">
                </el-pagination>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        value: false
      }
    },
     methods: {
        //  附加功能
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
  }
</script>

<style lang="scss" scoped>
</style>