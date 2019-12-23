<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h2>简单用法</h2>
      <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-checkbox v-model="checked">备选项</el-checkbox>
          
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
    <!-- 禁用状态 -->
    <div>
      <h2>禁用状态</h2>
      <p>多选框不可用状态。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
          <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>        
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
    <!-- 多选框组 -->
    <div>
      <h2>多选框组</h2>
      <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>     
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
    <!-- indeterminate 状态 -->
    <div>
      <h2>indeterminate 状态</h2>
      <p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>  
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
    <!-- 可选项目数量的限制 -->
    <div>
      <h2>可选项目数量的限制</h2>
      <p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-checkbox-group 
            v-model="checkedCities1"
            :min="1"
            :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
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
    <!-- 按钮样式 -->
    <div>
      <h2>按钮样式</h2>
      <p>按钮样式的多选组合。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div>
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
              <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
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
     <!-- 带有边框 -->
    <div>
      <h2>带有边框</h2>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <div>
              <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
              <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
              <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup5" size="small">
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border disabled></el-checkbox>
              </el-checkbox-group>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border></el-checkbox>
              </el-checkbox-group>
            </div>
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
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      CIcon
    },
    data() {
      return {
        codeStr: `
        <el-checkbox v-model="checked">备选项</el-checkbox>       
        `.replace(/^ {8}/gm, '').trim(),
         checked: true,
         codeStr2: `
        <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>   
        `.replace(/^ {8}/gm, '').trim(),
         checked1: false,
         checked2: true,
         codeStr3: `
         <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
         </el-checkbox-group>      
        `.replace(/^ {8}/gm, '').trim(),
        checkList: ['选中且禁用','复选框 A'],
        codeStr4: `
         <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>     
        `.replace(/^ {8}/gm, '').trim(),
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        codeStr5: `
         <el-checkbox-group 
            v-model="checkedCities1"
            :min="1"
            :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        `.replace(/^ {8}/gm, '').trim(),
        checkedCities1: ['上海', '北京'],
        // cities: cityOptions
        codeStr6: `
          <div>
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
              <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>    
        `.replace(/^ {8}/gm, '').trim(),
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        codeStr7: `
          <div>
              <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
              <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
              <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup5" size="small">
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border disabled></el-checkbox>
              </el-checkbox-group>
            </div>
            <div style="margin-top: 20px">
              <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border></el-checkbox>
              </el-checkbox-group>
            </div>  
        `.replace(/^ {8}/gm, '').trim(),
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: true,
        checkboxGroup5: [],
        checkboxGroup6: []
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>