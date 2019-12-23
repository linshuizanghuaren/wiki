<template>
    <div>

        <!-- 基础用法 -->
        <div>
            <h3>基础用法</h3>
            <p>基础的树形结构展示。 </p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
        <!-- 可选择 -->
        <div>
            <h3>可选择</h3>
            <p>适用于需要选择层级时使用。 </p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
        <!--懒加载自定义叶子节点 -->
        <div>
            <h3>懒加载自定义叶子节点</h3>
            <!-- <p>适用于需要选择层级时使用。 </p> -->
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tree
                    :props="propsTwo"
                    :load="loadNodeTwo"
                    lazy
                    show-checkbox>
                </el-tree>
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
        <!--默认展开和默认选中 -->
        <div>
            <h3>默认展开和默认选中</h3>
            <p>可将 Tree 的某些节点设置为默认展开或默认选中 </p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tree
                    :data="dataTwo"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                    :props="defaultPropsTwo">
                </el-tree>
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
        <!--禁用状态 -->
        <div>
            <h3>禁用状态</h3>
            <p>可将 Tree 的某些节点设置为禁用状态</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tree
                    :data="dataThree"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]">
                </el-tree>

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
        <!--树节点的选择 -->
        <div>
            <h3>树节点的选择</h3>
            <!-- <p>可将 Tree 的某些节点设置为禁用状态</p> -->
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-tree
                    :data="dataSix"
                    show-checkbox
                    default-expand-all
                    node-key="id"
                    ref="tree"
                    highlight-current
                    :props="defaultPropsSix">
                </el-tree>

                <div class="buttons">
                    <el-button @click="getCheckedNodes">通过 node 获取</el-button>
                    <el-button @click="getCheckedKeys">通过 key 获取</el-button>
                    <el-button @click="setCheckedNodes">通过 node 设置</el-button>
                    <el-button @click="setCheckedKeys">通过 key 设置</el-button>
                    <el-button @click="resetChecked">清空</el-button>
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
        <!--自定义节点内容 -->
        <div>
            <h3>自定义节点内容</h3>
            <p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <div class="custom-tree-container">
                <div class="block">
                    <p>使用 render-content</p>
                    <el-tree
                    :data="dataSeven"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false"
                    :render-content="renderContent">
                    </el-tree>
                </div>
                <div class="block">
                    <p>使用 scoped slot</p>
                    <el-tree
                    :data="dataSeven"
                    show-checkbox
                    node-key="id"
                    default-expand-all
                    :expand-on-click-node="false">
                    <span class="custom-tree-node" slot-scope="{ node, dataSeven }">
                        <span>{{ node.label }}</span>
                        <span>
                        <el-button
                            type="text"
                            size="mini"
                            @click="() => append(dataSeven)">
                            Append
                        </el-button>
                        <el-button
                            type="text"
                            size="mini"
                            @click="() => remove(node, dataSeven)">
                            Delete
                        </el-button>
                        </span>
                    </span>
                    </el-tree>
                </div>
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
        <!--节点过滤 -->
        <div>
            <h3>节点过滤</h3>
            <p>通过关键字过滤树节点</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <el-input
                    placeholder="输入关键字进行过滤"
                    v-model="filterText">
                </el-input>

                <el-tree
                    class="filter-tree"
                    :data="dataEight"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    ref="tree">
                </el-tree>

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
        <!--手风琴模式 -->
        <div>
            <h3>手风琴模式</h3>
            <p>对于同一级的节点，每次只能展开一个</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
               <el-tree
                    :data="data"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick">
                </el-tree>

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
        <!--可拖拽节点 -->
        <div>
            <h3>可拖拽节点</h3>
            <p>通过 draggable 属性可让节点变为可拖拽。</p>
            <div class="component-wrapper">
            <div class="component-wrapper-demo">
               <el-tree
                    :data="dataEight"
                    node-key="id"
                    default-expand-all
                    @node-drag-start="handleDragStart"
                    @node-drag-enter="handleDragEnter"
                    @node-drag-leave="handleDragLeave"
                    @node-drag-over="handleDragOver"
                    @node-drag-end="handleDragEnd"
                    @node-drop="handleDrop"
                    draggable
                    :allow-drop="allowDrop"
                    :allow-drag="allowDrag">
                </el-tree>
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
    </div>
</template>
<script>
    import mixin from '../mixin'
    import CIcon from '../../../src/icon/icon'
    let id = 1000;

    export default {
        mixins: [mixin],
        components: {
        CIcon
        },
        data() {
            return {
                codeStr: `
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                `.replace(/^ {8}/gm, '').trim(),
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                        label: '三级 1-1-1'
                        }]
                    }]
                    }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                        label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                        label: '三级 2-2-1'
                        }]
                    }]
                    }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                        label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                        label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                codeStr2: `
                    <el-tree
                        :props="props"
                        :load="loadNode"
                        lazy
                        show-checkbox
                        @check-change="handleCheckChange">
                    </el-tree>
                `.replace(/^ {8}/gm, '').trim(),
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1,
                codeStr3: `
                    <el-tree
                        :props="propsTwo"
                        :load="loadNodeTwo"
                        lazy
                        show-checkbox>
                    </el-tree>
                `.replace(/^ {8}/gm, '').trim(),
                propsTwo: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
                codeStr4: `
                    <el-tree
                        :data="dataTwo"
                        show-checkbox
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]"
                        :props="defaultPropsTwo">
                    </el-tree>
                `.replace(/^ {8}/gm, '').trim(),
                dataTwo: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                        id: 9,
                        label: '三级 1-1-1'
                        }, {
                        id: 10,
                        label: '三级 1-1-2'
                        }]
                    }]
                    }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                    }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                    }],
                defaultPropsTwo: {
                    children: 'children',
                    label: 'label'
                },
                codeStr5: `
                    <el-tree
                        :data="dataThree"
                        show-checkbox
                        node-key="id"
                        :default-expanded-keys="[2, 3]"
                        :default-checked-keys="[5]">
                    </el-tree>

                `.replace(/^ {8}/gm, '').trim(),
                dataThree: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1',
                        children: [{
                        id: 4,
                        label: '三级 3-1-1'
                        }, {
                        id: 5,
                        label: '三级 3-1-2',
                        disabled: true
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled: true,
                        children: [{
                        id: 6,
                        label: '三级 3-2-1'
                        }, {
                        id: 7,
                        label: '三级 3-2-2',
                        disabled: true
                        }]
                    }]
                }],
                codeStr6: `
                    <el-tree
                        :data="dataSix"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :props="defaultPropsSix">
                    </el-tree>

                    <div class="buttons">
                        <el-button @click="getCheckedNodes">通过 node 获取</el-button>
                        <el-button @click="getCheckedKeys">通过 key 获取</el-button>
                        <el-button @click="setCheckedNodes">通过 node 设置</el-button>
                        <el-button @click="setCheckedKeys">通过 key 设置</el-button>
                        <el-button @click="resetChecked">清空</el-button>
                    </div>
                `.replace(/^ {8}/gm, '').trim(),
                dataSix: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                        id: 9,
                        label: '三级 1-1-1'
                        }, {
                        id: 10,
                        label: '三级 1-1-2'
                        }]
                    }]
                    }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                    }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultPropsSix: {
                    children: 'children',
                    label: 'label'
                },
                codeStr7: `
                  <div class="custom-tree-container">
                    <div class="block">
                        <p>使用 render-content</p>
                        <el-tree
                        :data="dataSeven"
                        show-checkbox
                        node-key="id"
                        default-expand-all
                        :expand-on-click-node="false"
                        :render-content="renderContent">
                        </el-tree>
                    </div>
                    <div class="block">
                        <p>使用 scoped slot</p>
                        <el-tree
                        :data="dataSeven"
                        show-checkbox
                        node-key="id"
                        default-expand-all
                        :expand-on-click-node="false">
                        <span class="custom-tree-node" slot-scope="{ node, dataSeven }">
                            <span>{{ node.label }}</span>
                            <span>
                            <el-button
                                type="text"
                                size="mini"
                                @click="() => append(dataSeven)">
                                Append
                            </el-button>
                            <el-button
                                type="text"
                                size="mini"
                                @click="() => remove(node, dataSeven)">
                                Delete
                            </el-button>
                            </span>
                        </span>
                        </el-tree>
                    </div>
                    </div>
                `.replace(/^ {8}/gm, '').trim(),
                dataSeven: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                    id: 5,
                    label: '二级 2-1'
                    }, {
                    id: 6,
                    label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                    id: 7,
                    label: '二级 3-1'
                    }, {
                    id: 8,
                    label: '二级 3-2'
                    }]
                }],
                codeStr8: `
                    <el-input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText">
                    </el-input>

                    <el-tree
                        class="filter-tree"
                        :data="dataEight"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        ref="tree">
                    </el-tree>
                `.replace(/^ {8}/gm, '').trim(),
                filterText: '',
                dataEight: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                        id: 9,
                        label: '三级 1-1-1'
                        }, {
                        id: 10,
                        label: '三级 1-1-2'
                        }]
                    }]
                    }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                    }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                codeStr9: `
                    <el-tree
                        :data="data"
                        :props="defaultProps"
                        accordion
                        @node-click="handleNodeClick">
                    </el-tree>
                `.replace(/^ {8}/gm, '').trim(),
                codeStr10:`
                    <el-tree
                        :data="dataEight"
                        node-key="id"
                        default-expand-all
                        @node-drag-start="handleDragStart"
                        @node-drag-enter="handleDragEnter"
                        @node-drag-leave="handleDragLeave"
                        @node-drag-over="handleDragOver"
                        @node-drag-end="handleDragEnd"
                        @node-drop="handleDrop"
                        draggable
                        :allow-drop="allowDrop"
                        :allow-drag="allowDrag">
                    </el-tree>
                `.replace(/^ {8}/gm, '').trim()
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },

            // 可选择
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region1' }, { name: 'region2' }]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }
                    resolve(data);
                }, 500);
            },
            // 懒加载 
            loadNodeTwo(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }]);
                }
                if (node.level > 1) return resolve([]);

                setTimeout(() => {
                const data = [{
                    name: 'leaf',
                    leaf: true
                }, {
                    name: 'zone'
                }];

                resolve(data);
                }, 500);
            },
            //树节点的选择
            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedNodes());
            },
            getCheckedKeys() {
                console.log(this.$refs.tree.getCheckedKeys());
            },
            setCheckedNodes() {
                this.$refs.tree.setCheckedNodes([{
                id: 5,
                label: '二级 2-1'
                }, {
                id: 9,
                label: '三级 1-1-1'
                }]);
            },
            setCheckedKeys() {
                this.$refs.tree.setCheckedKeys([3]);
            },
            resetChecked() {
                this.$refs.tree.setCheckedKeys([]);
            },

            // 自定义
            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },

            renderContent(h, { node, data, store }) {
                return (
                <span class="custom-tree-node">
                    <span>{node.label}</span>
                    <span>
                    <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
                    <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
                    </span>
                </span>);
            },

            //关键字过滤
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },

            //可拖拽
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode, type) {
                if (dropNode.data.label === '二级 3-1') {
                return type !== 'inner';
                } else {
                return true;
                }
            },
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
  }
</script>

<style lang="scss" scoped>
//自定义节点
 .custom-tree-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>