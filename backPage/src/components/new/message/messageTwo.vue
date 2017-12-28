<template>
  <div class="messageTwo">
   <el-form ref="form" :model="form" label-width="80px">
    <h4>二级分类列表</h4>
    <el-form-item label="二级中文类名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="二级英文标识">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form> 
  <el-button
  size="mini"
  @click="handleEdit(scope.$index, scope.row)">提交</el-button>
  <el-button
  size="mini"
  type="primary"
  @click="dialogVisible = true">重置</el-button>
</div>
</template>

<script>
export default {  
  data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
        }
      }
    },
    methods: {
    // 编辑框
      handleEdit(index, row) {
        console.log(index, row);
      },
    // 删除框
      handleDelete(index, row) {
        console.log(index, row);
      },
    }
  }
</script>

<style scoped>
  a {
    color: #333;
    text-decoration: none;
  }
</style>

