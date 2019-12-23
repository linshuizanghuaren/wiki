<template>
    <div>
        <!-- 点击上传 -->
        <div>
            <div>
            <h3>点击上传</h3>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                
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
        </div>
        <!-- 用户头像上传 -->
        <div>
            <h3>用户头像上传</h3>
            <p>使用 before-upload 限制用户上传的图片格式和大小。</p>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                
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
        <!-- 照片墙 -->
        <div>
            <h3>照片墙</h3>
            <p>使用 list-type 属性来设置文件列表的样式。</p>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                
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
        <!-- 图片列表缩略图 -->
        <div>
            <h3>图片列表缩略图</h3>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList2"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                
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
        <!-- 上传文件列表控制 -->
        <div>
            <h3>上传文件列表控制</h3>
            <p>通过 on-change 钩子函数来对列表进行控制</p>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange"
                        :file-list="fileList3">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                
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
        <!-- 拖拽上传 -->
        <div>
            <h3>拖拽上传</h3>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                
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
        <!-- 手动上传 -->
        <div>
            <h3>手动上传</h3>
            <div class="component-wrapper">
                <div class="component-wrapper-demo">
                   <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                
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
  export default {
    mixins: [mixin],
    components: {
      CIcon
    },
    data() {
      return {
        codeStr: `
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>        
        `.replace(/^ {8}/gm, '').trim(),
         fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        codeStr2: `
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        `.replace(/^ {8}/gm, '').trim(),
         imageUrl: '',
         codeStr3: `
            <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        `.replace(/^ {8}/gm, '').trim(),
         dialogImageUrl: '',
         dialogVisible: false,
         codeStr4: `
             <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
             </el-upload>
        `.replace(/^ {8}/gm, '').trim(),
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        codeStr5: `
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        `.replace(/^ {8}/gm, '').trim(),
        fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'finished'
        }],
        codeStr6: `
            <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr7: `
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
     methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
       handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      },
      submitUpload() {
        this.$refs.upload.submit();
      }
    }
  }
</script>

<style lang="scss" scope>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  display: block;
  }
</style>