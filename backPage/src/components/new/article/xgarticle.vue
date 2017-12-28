<template>
  <div class="xgarticle">
  <h2>修改文章</h2>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="文章标题">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="是否显示">
    <el-radio-group v-model="form.resource">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="是否显示">
    <el-radio-group v-model="form.resource">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="导读">
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea3">
    </el-input>
  </el-form-item>
   <el-table-column
        prop="time"
        label="时间"
        width="200">
    </el-table-column>
  <el-form-item label="导读">
   <el-upload
    class="upload-demo"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple>
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
   </el-upload>
  </el-form-item>
  <el-form-item label="内容">
    <div>
      <!--editor的div为富文本的承载容器-->
      <div id="editor"></div>
    </div>
  </el-form-item>
 </el-form> 
</div>
</template>

<script>
export default {  
  data() {
      return {
        textarea3: '',
        editor: null,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      gettext() {
        // 获取editor中的文本
        console.log(this.editor.getContent())
      },
      mounted() {
        // 实例化editor编辑器
        this.editor = UE.getEditor('editor');
        // console.log(this.editor.setContent("1223"))
      },
      destroyed() {
        // 将editor进行销毁
        this.editor.destroy();
      }
    }
  }
</script>

<style scoped>

</style>
