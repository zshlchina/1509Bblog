<template>
  <div class="endPort">
   <el-container>
    <el-header>
      <span>个人博客</span>
      <span>当前登录账户:  {{this.$route.params.user}}</span>
    </el-header>
    <el-container>
     <el-aside width="200px">
        <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1','2','3','4']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>文章管理</template>
                <el-menu-item-group>
                <router-link to="/articleAdd"><el-menu-item index="1-1">添加文章</el-menu-item></router-link>
                <router-link to="/articleList"><el-menu-item index="1-2">文章列表</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>分类管理</template>
                <el-menu-item-group>
                <router-link to="/classificationOne"><el-menu-item index="2-1">添加一级分类</el-menu-item></router-link>
                <router-link to="/classificationtwo"><el-menu-item index="2-2">添加二级分类</el-menu-item></router-link>
                <router-link to="/classificationList"><el-menu-item index="2-3">分类列表</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-menu"></i>接口管理</template>
                <el-menu-item-group>
                <el-menu-item index="3-1"><router-link to="/interfaceOne">添加一级分类</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to="/interfaceTwo">添加二级分类</router-link></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-menu"></i>留言板管理</template>
                <el-menu-item-group>
                <el-menu-item index="3-1"><router-link to="/messageOne">添加一级分类</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to="/messageTwo">添加二级分类</router-link></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
       </el-container>
     </el-aside>
     <el-main>
      <router-view></router-view>
     </el-main>
    </el-container>
   </el-container>
  </div>
</template>

<script>
export default {
  name: 'endPort',
  computed: {
    username () {
      return localStorage.getItem('username')
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
    line-height: 180px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  
  a {
    color: #333;
    text-decoration: none;
  }
</style>
