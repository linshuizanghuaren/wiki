<template>
    <div>
        <!-- 日期和时间点 -->
        <div>
            <h3>日期和时间点</h3>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期时间">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                    v-model="value2"
                    type="datetime"
                    placeholder="选择日期时间"
                    align="right"
                    :picker-options="pickerOptions1">
                    </el-date-picker>
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
        <!-- 日期和时间范围 -->
        <div>
            <h3>日期和时间范围</h3>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                    v-model="value3"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                    v-model="value4"
                    type="datetimerange"
                    :picker-options="pickerOptions2"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                    </el-date-picker>
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
                <span class="demonstration">默认</span>
                <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">带快捷选项</span>
                <el-date-picker
                v-model="value2"
                type="datetime"
                placeholder="选择日期时间"
                align="right"
                :picker-options="pickerOptions1">
                </el-date-picker>
            </div>
          
        `.replace(/^ {8}/gm, '').trim(),
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        codeStr2: `
                 <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                    v-model="value3"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                    v-model="value4"
                    type="datetimerange"
                    :picker-options="pickerOptions2"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right">
                    </el-date-picker>
                </div>
          
        `.replace(/^ {8}/gm, '').trim(),
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>