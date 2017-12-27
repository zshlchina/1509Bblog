<template>
      <div id="app">
        <!-- 头部导航 -->
        <header class="header">
        <el-row>
            <el-col :span="24">
              <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
                <!-- <h2 class="h2">个人博客</h2> -->
                <el-menu-item index="1" class="h2">个人博客</el-menu-item>
                <el-menu-item index="2">技术</el-menu-item>
                <el-menu-item index="3">八维</el-menu-item>
              </el-menu>
            </el-col>
        </el-row>
        </header>
        <div style="position: relative;height: 60px;width: 100%;"></div>

        <main>
              <!-- 左侧列表 -->
              <div  class="main-left" >

              </div>
            

              <!-- 右侧列表 -->
              <div class="main-right">
              <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
                <el-menu-item index="/activePublic" :class="{'isActive': active}">全站搜索</el-menu-item>
                <el-menu-item index="/activeManage" :class="{'isActive': !active}">点击排行</el-menu-item>
                <el-menu-item index="/activeManage" :class="{'isActive': !active}">最新文章</el-menu-item>
              </el-menu>
            </div>
        </main>
      </div>
    </template>

    <script>
import Vue from "vue";
import Element from "element-ui";
import "element-ui/lib/theme-default/index.css";

Vue.use(Element);

export default {
  name: "app",
  data: function() {
    return {
      active: true
    };
  }
};
</script>

    <style>
body {
  margin: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "PingFang SC", Arial, sans-serif;
}
/* 头部导航 */
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  background: skyblue;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header .el-menu-demo {
  padding-left: 100px !important;
}
header .el-menu{
  background:skyblue;
}
header .h2{
  font-size: 30px;
  color:#333;
}

/* 主内容区 */
main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 800px;
  border: solid 40px #e9ecf1;
  background-color: #fcfcfc;
}
main .main-right {
  text-align: center;
  width: 200px;
  float: left;
}
main .main-left {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: tan;
  padding: 50px 70px;
}
main .el-menu {
  background-color: transparent !important;
}
</style>