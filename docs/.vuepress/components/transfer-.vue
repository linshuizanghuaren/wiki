<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-transfer v-model="value"
                       :data="data"></el-transfer>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr0}}</code></pre>
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
    <!-- 可搜索 -->
    <div>
      <h3>可搜索</h3>
      <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-transfer filterable
                       :filter-method="filterMethod"
                       filter-placeholder="请输入城市拼音"
                       v-model="value1"
                       :data="data1">
          </el-transfer>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr1}}</code></pre>
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
  data () {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
    const generateData2 = _ => {
      const data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    const generateData3 = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
    return {
      codeStr0: `
          <el-transfer v-model="value" :data="data"></el-transfer>
        `.replace(/^ {8}/gm, '').trim(),
      data: generateData(),
      value: [1, 4],
      codeStr1: `
        <el-transfer
            filterable
            :filter-method="filterMethod"
            filter-placeholder="请输入城市拼音"
            v-model="value"
            :data="data">
        </el-transfer>
      `.replace(/^ {8}/gm, '').trim(),
      data1: generateData2(),
      value1: [],
      filterMethod (query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    }
  },
  methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
}
</script>

<style lang="scss" scoped>
.transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>