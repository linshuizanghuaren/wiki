<template>
  <div>
    <!-- 基础表格 -->
    <div>
      <h2>基础表格</h2>
      <p>基础的表格展示用法。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="address"
                  label="地址">
              </el-table-column>
          </el-table>
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
    <!-- 带斑马纹表格 -->
    <div>
      <h2>带斑马纹表格</h2>
      <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
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
    <!-- 带边框的表格 -->
    <div>
      <h2>带边框表格</h2>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
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
    <!-- 带状态表格 -->
    <div>
      <h2>带状态表格</h2>
      <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
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
    <!-- 固定表头 -->
    <div>
      <h2>固定表头</h2>
      <p>纵向内容过多时，可选择固定表头。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
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
    <!-- 固定列 -->
    <div>
      <h2>固定列</h2>
      <p>横向内容过多时，可选择固定列。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  fixed
                  prop="date"
                  label="日期"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="省份"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="市区"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="邮编"
                  width="120">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
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
    <!-- 固定列和表头 -->
    <div>
      <h2>固定列和表头</h2>
      <p>横纵内容过多时，可选择固定列和表头。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              style="width: 100%"
              height="250">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
            </el-table>
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
    <!-- 流体高度 -->
    <div>
      <h2>流体高度</h2>
      <p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              style="width: 100%"
              height="250">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr8}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(7)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[7] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[7] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 多级表头 -->
    <div>
      <h2>多级表头</h2>
      <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column label="配送信息">
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column label="地址">
                  <el-table-column
                    prop="province"
                    label="省份"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="市区"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址"
                    width="300">
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="邮编"
                    width="120">
                  </el-table-column>
                </el-table-column>
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr9}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(8)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[8] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[8] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 单选 -->
    <div>
      <h2>单选</h2>
      <p>选择单行数据时使用色块表示。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              ref="singleTable"
              :data="tableData"
              highlight-current-row
              @current-change="handleCurrentChange"
              style="width: 100%">
              <el-table-column
                type="index"
                width="50">
              </el-table-column>
              <el-table-column
                property="date"
                label="日期"
                width="120">
              </el-table-column>
              <el-table-column
                property="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                property="address"
                label="地址">
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
              <el-button @click="setCurrent()">取消选择</el-button>
            </div>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr10}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(9)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[9] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[9] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 多选 -->
    <div>
      <h2>多选</h2>
      <p>选择多行数据时使用 Checkbox。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  label="日期"
                  width="120">
                  <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  show-overflow-tooltip>
                </el-table-column>
              </el-table>
              <div style="margin-top: 20px">
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
              </div>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr11}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(10)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[10] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[10] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 排序 -->
    <div>
      <h2>排序</h2>
      <p>对表格进行排序，可快速查找或对比数据。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              style="width: 100%"
              :default-sort = "{prop: 'date', order: 'descending'}"
              >
              <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter">
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr12}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(11)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[11] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[11] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 筛选 -->
    <div>
      <h2>筛选</h2>
      <p>对表格进行筛选，可快速查找到自己想看的数据。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-button @click="resetDateFilter">清除日期过滤器</el-button>
              <el-button @click="clearFilter">清除所有过滤器</el-button>
              <el-table
                ref="filterTable"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期"
                  sortable
                  width="180"
                  column-key="date"
                  :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                  :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  :formatter="formatter">
                </el-table-column>
                <el-table-column
                  prop="tag"
                  label="标签"
                  width="100"
                  :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                  :filter-method="filterTag"
                  filter-placement="bottom-end">
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.tag === '家' ? 'primary' : 'success'"
                      disable-transitions>{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
              </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr13}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(12)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[12] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[12] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 自定义列模板 -->
    <div>
      <h2>自定义列模板</h2>
      <p>自定义列的显示内容，可组合其他组件使用。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                label="日期"
                width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="姓名"
                width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr14}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(13)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[13] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[13] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 展开行 -->
    <div>
      <h2>展开行</h2>
      <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
             <el-table
                :data="tableData15"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="商品名称">
                        <span>{{ props.row.name }}</span>
                      </el-form-item>
                      <el-form-item label="所属店铺">
                        <span>{{ props.row.shop }}</span>
                      </el-form-item>
                      <el-form-item label="商品 ID">
                        <span>{{ props.row.id }}</span>
                      </el-form-item>
                      <el-form-item label="店铺 ID">
                        <span>{{ props.row.shopId }}</span>
                      </el-form-item>
                      <el-form-item label="商品分类">
                        <span>{{ props.row.category }}</span>
                      </el-form-item>
                      <el-form-item label="店铺地址">
                        <span>{{ props.row.address }}</span>
                      </el-form-item>
                      <el-form-item label="商品描述">
                        <span>{{ props.row.desc }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="商品 ID"
                  prop="id">
                </el-table-column>
                <el-table-column
                  label="商品名称"
                  prop="name">
                </el-table-column>
                <el-table-column
                  label="描述"
                  prop="desc">
                </el-table-column>
              </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr15}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(14)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[14] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[14] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 树形数据与懒加载 -->
    <div>
      <h2>树形数据与懒加载</h2>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-table
              :data="tableData16"
              style="width: 100%;margin-bottom: 20px;"
              row-key="id"
              border
              default-expand-all
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>

            <el-table
              :data="tableData1"
              style="width: 100%"
              row-key="id"
              border
              lazy
              :load="load"
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr16}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(15)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[15] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[15] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 自定义表头 -->
    <div>
      <h2>自定义表头</h2>
      <p>表头支持自定义。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-table
              :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%">
              <el-table-column
                label="Date"
                prop="date">
              </el-table-column>
              <el-table-column
                label="Name"
                prop="name">
              </el-table-column>
              <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEditTwo(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDeleteTwo(scope.$index, scope.row)">Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr17}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(16)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[16] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[16] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 表尾合计行 -->
    <div>
      <h2>表尾合计行</h2>
      <p>若表格展示的是各类数字，可以在表尾显示各列的合计。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-table
              :data="tableData18"
              border
              show-summary
              style="width: 100%">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                sortable
                label="数值 1">
              </el-table-column>
              <el-table-column
                prop="amount2"
                sortable
                label="数值 2">
              </el-table-column>
              <el-table-column
                prop="amount3"
                sortable
                label="数值 3">
              </el-table-column>
            </el-table>

            <el-table
              :data="tableData"
              border
              height="200"
              :summary-method="getSummaries"
              show-summary
              style="width: 100%; margin-top: 20px">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                label="数值 1（元）">
              </el-table-column>
              <el-table-column
                prop="amount2"
                label="数值 2（元）">
              </el-table-column>
              <el-table-column
                prop="amount3"
                label="数值 3（元）">
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr18}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(17)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[17] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[17] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 合并行或列 -->
    <div>
      <h2>合并行或列</h2>
      <p>多行或多列共用一个数据时，可以合并行或列。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-table
              :data="tableData18"
              :span-method="arraySpanMethod"
              border
              style="width: 100%">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                sortable
                label="数值 1">
              </el-table-column>
              <el-table-column
                prop="amount2"
                sortable
                label="数值 2">
              </el-table-column>
              <el-table-column
                prop="amount3"
                sortable
                label="数值 3">
              </el-table-column>
            </el-table>

            <el-table
              :data="tableData18"
              :span-method="objectSpanMethod"
              border
              style="width: 100%; margin-top: 20px">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                label="数值 1（元）">
              </el-table-column>
              <el-table-column
                prop="amount2"
                label="数值 2（元）">
              </el-table-column>
              <el-table-column
                prop="amount3"
                label="数值 3（元）">
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr19}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(18)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[18] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[18] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
    <!-- 自定义索引 -->
    <div>
      <h2>自定义索引</h2>
      <p>自定义 type=index 列的行号。</p>
      <div class="component-wrapper">
        <div class="component-wrapper-demo">
            <el-table
              :data="tableData20"
              style="width: 100%">
              <el-table-column
                type="index"
                :index="indexMethod">
              </el-table-column>
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
        </div>
        <div class="code-content"
            v-highlight
            style="height: 0;">
          <div class="code-content-height">
            <pre><code class="html">{{codeStr20}}</code></pre>
          </div>
        </div>
        <div class="lock-code"
            @click="showCode(19)"
            ref="xxx">
          <c-icon class="icon-down"
                  :name="isShow[19] === false ? 'down' : 'up'"></c-icon>
          <span class="lock-code-word">{{isShow[19] === false ? '显示代码' : '隐藏代码'}}</span>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
  import mixin from '../mixin'
  import CIcon from '../../../src/icon/icon'
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      CIcon
    },
    data() {
      return {
        codeStr: `
            <el-table
            :data="tableData"
            style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }],
        codeStr2: `
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        `.replace(/^ {8}/gm, '').trim(),
          codeStr3: `
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr4: `
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr5: `
             <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr6: `
             <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr7: `
             <el-table
              :data="tableData"
              style="width: 100%"
              height="250">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr8: `
             <el-table
              :data="tableData"
              style="width: 100%"
              max-height="250">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr9:`
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column label="配送信息">
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column label="地址">
                <el-table-column
                  prop="province"
                  label="省份"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="市区"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="邮编"
                  width="120">
                </el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr10:`
          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="date"
              label="日期"
              width="120">
            </el-table-column>
            <el-table-column
              property="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              property="address"
              label="地址">
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
            <el-button @click="setCurrent()">取消选择</el-button>
          </div>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr11:`
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="日期"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
              <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        `.replace(/^ {8}/gm, '').trim(),
        multipleSelection: [],
        codeStr12:`
            <el-table
              :data="tableData"
              style="width: 100%"
              :default-sort = "{prop: 'date', order: 'descending'}"
              >
              <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                sortable
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr13:`
            <el-button @click="resetDateFilter">清除日期过滤器</el-button>
            <el-button @click="clearFilter">清除所有过滤器</el-button>
            <el-table
              ref="filterTable"
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180"
                column-key="date"
                :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                :filter-method="filterHandler"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter">
              </el-table-column>
              <el-table-column
                prop="tag"
                label="标签"
                width="100"
                :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.tag === '家' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr14:` 
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                label="日期"
                width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="姓名"
                width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr15:`
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                      <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                      <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                      <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                      <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                      <span>{{ props.row.desc }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column
                label="商品 ID"
                prop="id">
              </el-table-column>
              <el-table-column
                label="商品名称"
                prop="name">
              </el-table-column>
              <el-table-column
                label="描述"
                prop="desc">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        tableData15: [{
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }],
        codeStr16:``.replace(/^ {8}/gm, '').trim(),
        tableData16: [{
              id: 1,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id: 2,
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              id: 3,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              children: [{
                  id: 31,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  id: 32,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
              }]
            }, {
              id: 4,
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
            tableData1: [{
              id: 1,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id: 2,
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              id: 3,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              hasChildren: true
            }, {
              id: 4,
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
        }],
        codeStr17:`
            <el-table
              :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%">
              <el-table-column
                label="Date"
                prop="date">
              </el-table-column>
              <el-table-column
                label="Name"
                prop="name">
              </el-table-column>
              <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                  <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        tableData18: [{
            id: '12987122',
            name: '王小虎',
            amount1: '234',
            amount2: '3.2',
            amount3: 10
          }, {
            id: '12987123',
            name: '王小虎',
            amount1: '165',
            amount2: '4.43',
            amount3: 12
          }, {
            id: '12987124',
            name: '王小虎',
            amount1: '324',
            amount2: '1.9',
            amount3: 9
          }, {
            id: '12987125',
            name: '王小虎',
            amount1: '621',
            amount2: '2.2',
            amount3: 17
          }, {
            id: '12987126',
            name: '王小虎',
            amount1: '539',
            amount2: '4.1',
            amount3: 15
        }],
        codeStr18:`
            <el-table
              :data="tableData"
              border
              show-summary
              style="width: 100%">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                sortable
                label="数值 1">
              </el-table-column>
              <el-table-column
                prop="amount2"
                sortable
                label="数值 2">
              </el-table-column>
              <el-table-column
                prop="amount3"
                sortable
                label="数值 3">
              </el-table-column>
            </el-table>

            <el-table
              :data="tableData"
              border
              height="200"
              :summary-method="getSummaries"
              show-summary
              style="width: 100%; margin-top: 20px">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                label="数值 1（元）">
              </el-table-column>
              <el-table-column
                prop="amount2"
                label="数值 2（元）">
              </el-table-column>
              <el-table-column
                prop="amount3"
                label="数值 3（元）">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr19:`
            <el-table
              :data="tableData"
              :span-method="arraySpanMethod"
              border
              style="width: 100%">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                sortable
                label="数值 1">
              </el-table-column>
              <el-table-column
                prop="amount2"
                sortable
                label="数值 2">
              </el-table-column>
              <el-table-column
                prop="amount3"
                sortable
                label="数值 3">
              </el-table-column>
            </el-table>

            <el-table
              :data="tableData"
              :span-method="objectSpanMethod"
              border
              style="width: 100%; margin-top: 20px">
              <el-table-column
                prop="id"
                label="ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="amount1"
                label="数值 1（元）">
              </el-table-column>
              <el-table-column
                prop="amount2"
                label="数值 2（元）">
              </el-table-column>
              <el-table-column
                prop="amount3"
                label="数值 3（元）">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr20:`
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                type="index"
                :index="indexMethod">
              </el-table-column>
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
        `.replace(/^ {8}/gm, '').trim(),
        tableData20: [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            tag: '家'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333,
            tag: '公司'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333,
            tag: '家'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333,
            tag: '公司'
        }],




      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(row) {
        console.log(row);
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
       formatter(row, column) {
        return row.address;
      },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      load(tree, treeNode, resolve) {
          setTimeout(() => {
            resolve([
              {
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ])
          }, 1000)
      },
      handleEditTwo(index, row) {
        console.log(index, row);
      },
      handleDeleteTwo(index, row) {
        console.log(index, row);
      },
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      indexMethod(index) {
        return index * 2;
      }
    },
  }
</script>

<style lang="scss" scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>