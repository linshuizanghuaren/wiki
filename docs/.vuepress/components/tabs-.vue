<template>
  <div>
    <!-- 基础用法 -->
    <div>
      <h3>基础用法</h3>
      <p>基础的、简洁的标签页。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-tabs v-model="activeName0">
            <el-tab-pane label="用户管理"
                         name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理"
                         name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理"
                         name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿"
                         name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
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
    <!-- 选项卡样式 -->
    <div>
      <h3>选项卡样式</h3>
      <p>选项卡样式的标签页。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-tabs v-model="activeName1"
                   type="card">
            <el-tab-pane label="用户管理"
                         name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理"
                         name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理"
                         name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿"
                         name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
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
    <!-- 卡片化 -->
    <div>
      <h3>卡片化</h3>
      <p>卡片化的标签页。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr2}}</code></pre>
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
    <!-- 位置 -->
    <div>
      <h3>位置</h3>
      <p>可以通过 tab-position 设置标签的位置</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-radio-group v-model="tabPosition"
                          style="margin-bottom: 30px;">
            <el-radio-button label="top">top</el-radio-button>
            <el-radio-button label="right">right</el-radio-button>
            <el-radio-button label="bottom">bottom</el-radio-button>
            <el-radio-button label="left">left</el-radio-button>
          </el-radio-group>

          <el-tabs :tab-position="tabPosition"
                   style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr3}}</code></pre>
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
    <!-- 自定义标签 -->
    <div>
      <h3>自定义标签页</h3>
      <p>可以通过具名 slot 来实现自定义标签页的内容</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
              我的行程
            </el-tab-pane>
            <el-tab-pane label="消息中心">消息中心</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr4}}</code></pre>
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
    <!-- 动态增减标签页 -->
    <div>
      <h3>动态增减标签页</h3>
      <p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <el-tabs v-model="editableTabsValue"
                   type="card"
                   editable>
            <el-tab-pane :key="item.name"
                         v-for="(item, index) in editableTabs"
                         :label="item.title"
                         :name="item.name">
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr5}}</code></pre>
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
    <!-- 自定义增加标签页触发器 -->
    <div>
      <h3>自定义增加标签页触发器</h3>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
          <div style="margin-bottom: 20px;">
            <el-button size="small">
              add tab
            </el-button>
          </div>
          <el-tabs v-model="editableTabsValue1"
                   type="card"
                   closable>
            <el-tab-pane v-for="(item, index) in editableTabs1"
                         :key="item.name"
                         :label="item.title"
                         :name="item.name">
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="code-content"
             v-highlight
             style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr6}}</code></pre>
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
  data () {
    return {
      activeName0: 'second',
      activeName1: 'first',
      tabPosition: 'left',
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2,
      editableTabsValue1: '2',
      editableTabs1: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      codeStr0: `
          <el-tabs v-model="activeName0">
            <el-tab-pane label="用户管理"
                         name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理"
                         name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理"
                         name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿"
                         name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr1: `
          <el-tabs v-model="activeName1"
                   type="card">
            <el-tab-pane label="用户管理"
                         name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理"
                         name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理"
                         name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿"
                         name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr2: `
          <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr3: `
          <el-radio-group v-model="tabPosition"
                          style="margin-bottom: 30px;">
            <el-radio-button label="top">top</el-radio-button>
            <el-radio-button label="right">right</el-radio-button>
            <el-radio-button label="bottom">bottom</el-radio-button>
            <el-radio-button label="left">left</el-radio-button>
          </el-radio-group>

          <el-tabs :tab-position="tabPosition"
                   style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr4: `
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
              我的行程
            </el-tab-pane>
            <el-tab-pane label="消息中心">消息中心</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr5: `
          <el-tabs v-model="editableTabsValue"
                   type="card"
                   editable>
            <el-tab-pane :key="item.name"
                         v-for="(item, index) in editableTabs"
                         :label="item.title"
                         :name="item.name">
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        `.replace(/^ {8}/gm, '').trim(),
      codeStr6: `
          <div style="margin-bottom: 20px;">
            <el-button size="small">
              add tab
            </el-button>
          </div>
          <el-tabs v-model="editableTabsValue1"
                   type="card"
                   closable>
            <el-tab-pane v-for="(item, index) in editableTabs1"
                         :key="item.name"
                         :label="item.title"
                         :name="item.name">
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>