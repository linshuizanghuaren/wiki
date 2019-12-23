<template>
    <div>
        <!-- 固定时间点 -->
        <div>
            <h3>固定时间点</h3>
            <p>提供几个固定的时间点供用户选择</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-time-select
                    v-model="value1"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                    placeholder="选择时间">
                </el-time-select>
                
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
        <!-- 任意时间点 -->
        <div>
            <h3>任意时间点</h3>
            <p>可以选择任意时间</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-time-picker
                    v-model="value2"
                    :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">
                </el-time-picker>
                <el-time-picker
                    arrow-control
                    v-model="value3"
                    :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">
                </el-time-picker>
                
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
        <!-- 固定时间范围 -->
        <div>
            <h3>固定时间范围</h3>
            <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
               <el-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                    }">
                </el-time-select>
                <el-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime
                    }">
                </el-time-select>
                
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
        <!-- 任意时间范围 -->
        <div>
            <h3>任意时间范围</h3>
            <p>可选择任意的时间范围</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
               <el-time-picker
                    is-range
                    v-model="value4"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                </el-time-picker>
                <el-time-picker
                    is-range
                    arrow-control
                    v-model="value5"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                </el-time-picker>
                
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
         <el-time-select
                v-model="value1"
                :picker-options="{
                start: '08:30',
                 step: '00:15',
                end: '18:30'
                }"
        placeholder="选择时间">
         </el-time-select>          
        `.replace(/^ {8}/gm, '').trim(),
         value1: '',
         codeStr2: `
            <el-time-picker
                    v-model="value2"
                    :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">
                </el-time-picker>
                <el-time-picker
                    arrow-control
                    v-model="value3"
                    :picker-options="{
                    selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">
                </el-time-picker>   
        `.replace(/^ {8}/gm, '').trim(),
        value2: new Date(2016, 9, 10, 18, 40),
        value3: new Date(2016, 9, 10, 18, 40),
        codeStr3: `
         <el-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                    }">
                </el-time-select>
                <el-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime
                    }">
                </el-time-select>         
        `.replace(/^ {8}/gm, '').trim(),
        startTime: '',
        endTime: '',
        codeStr4: `
            <el-time-picker
                    is-range
                    v-model="value4"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
             </el-time-picker>
            <el-time-picker
                    is-range
                    arrow-control
                    v-model="value5"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
            </el-time-picker>       
        `.replace(/^ {8}/gm, '').trim(),
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>