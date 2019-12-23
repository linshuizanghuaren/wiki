<template>
<div>
    <!-- 选择日 -->
    <div>
        <h3>选择日</h3>
        <p>以「日」为基本单位，基础的日期选择控件</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
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
    <!-- 其他日期单位 -->
    <div>
        <h3>其他日期单位</h3>
        <p>通过扩展基础的日期选择，可以选择周、月、年</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div class="block">
                    <span class="demonstration">周</span>
                    <el-date-picker
                        v-model="value3"
                        type="week"
                        format="yyyy 第 WW 周"
                        placeholder="选择周">
                    </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">月</span>
                <el-date-picker
                        v-model="value4"
                        type="month"
                        placeholder="选择月">
                </el-date-picker>
            </div>
             <div class="block">
                <span class="demonstration">年</span>
                <el-date-picker
                    v-model="value5"
                    align="right"
                     type="year"
                    placeholder="选择年">
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
    <!-- 默认显示日期 -->
    <div>
        <h3>默认显示日期</h3>
        <p>未选择日期时，默认显示今天的日历。使用default-value可以指定其他日期，该值需要能够被new Date()解析。 类型为daterange时，指定左侧日历的日期。</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div class="block">
                <span class="demonstration">date</span>
                <el-date-picker
                v-model="value8"
                type="date"
                placeholder="选择日期"
                default-value="2010-10-01">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">daterange</span>
                <el-date-picker
                v-model="value9"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                default-value="2010-10-01">
                </el-date-picker>
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
    <!-- 返回值格式 -->
    <div>
        <h3>返回值格式</h3>
        <p>默认情况下，组件接受并返回Date对象。 使用value-format指定返回值的格式，支持的格式与format相同。</p>
        <p>该功能处于测试阶段，欢迎提供反馈。</p>
        <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div class="block">
                <span class="demonstration">默认为 Date 对象</span>
                <div class="demonstration">组件值：{{ value10 }}</div>
                <el-date-picker
                v-model="value10"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">使用 value-format 进行格式化</span>
                <div class="demonstration">组件值：{{ value11 }}</div>
                <el-date-picker
                v-model="value11"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
                </el-date-picker>
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
        <div class="block">
                <span class="demonstration">默认</span>
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">带快捷选项</span>
                <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1">
                </el-date-picker>
            </div>          
        `.replace(/^ {8}/gm, '').trim(),
         pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
                    <span class="demonstration">周</span>
                    <el-date-picker
                        v-model="value3"
                        type="week"
                        format="yyyy 第 WW 周"
                        placeholder="选择周">
                    </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">月</span>
                <el-date-picker
                        v-model="value4"
                        type="month"
                        placeholder="选择月">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">年</span>
                <el-date-picker
                    v-model="value5"
                    align="right"
                     type="year"
                    placeholder="选择年">
                </el-date-picker>
            </div>        
        `.replace(/^ {8}/gm, '').trim(),
        value3: '',
        value4: '',
        value5: '',
        codeStr3: `
             <div class="block">
                <span class="demonstration">date</span>
                <el-date-picker
                v-model="value8"
                type="date"
                placeholder="选择日期"
                default-value="2010-10-01">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">daterange</span>
                <el-date-picker
                v-model="value9"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                default-value="2010-10-01">
                </el-date-picker>
            </div>   
        `.replace(/^ {8}/gm, '').trim(),
        value8: '',
        value9: '',
        codeStr4: `
            <div class="block">
                <span class="demonstration">默认为 Date 对象</span>
                <div class="demonstration">组件值：{{ value10 }}</div>
                <el-date-picker
                v-model="value10"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日">
                </el-date-picker>
            </div>
            <div class="block">
                <span class="demonstration">使用 value-format 进行格式化</span>
                <div class="demonstration">组件值：{{ value11 }}</div>
                <el-date-picker
                v-model="value11"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
                </el-date-picker>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        value10: '',
        value11: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>