<template>
  <div class="articleList">
      <template>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="title"
            label="标题"
            width="200">
        </el-table-column>
        <el-table-column
            prop="Author"
            label="作者"
            width="200">
        </el-table-column>
        <el-table-column
            prop="time"
            label="时间"
            width="200">
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"><router-link to="/xgarticle">修改</router-link></el-button>
            <el-button
            size="mini"
            type="danger"
            @click="dialogVisible = true">删除</el-button>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <span>确定删除此接口文档</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
        </template>
        </el-table-column>
        </el-table>
        <div style="margin: 20px 0;"></div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="5" 
            :page-sizes="[5, 10, 15, 20]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="5">
          </el-pagination>
        </div>
      </template>
  </div>
</template>

<script>
export default {
  name: 'articleList',
  data () {
    return {
      dialogVisible: false,
      tableData: [{
        title: 'Vue',
        Author: '尤雨溪',
        time: '2017/12/27'
      }, {
        title: 'Vue',
        Author: '尤雨溪',
        time: '2017/12/27'
      }],
       currentPage1: 5,
       currentPage2: 5,
       currentPage3: 5,
       currentPage4: 4
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
    // 	pageSize 改变时会触发 @size-change
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    // 改变时会触发 handleCurrentChange @current-change 
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style scoped>
   .el-header{
    background-color: #B3C0D1;
    color: #fff;
    line-height: 60px;
    font-size: 16px;
    display: flex;
    justify-content: space-between
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 180px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  
  a {
    color: #333;
    text-decoration: none;
  }
</style>
