<template>
    <div id="app">
    <!-- 头部导航 -->
        <header class="header">
            <el-row>
                <el-col :span="24">
                    <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
                        <el-menu-item index="1" class="h2">个人博客</el-menu-item>
                        <el-menu-item index="2">技术</el-menu-item>
                        <el-menu-item index="3">八维</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </header>
        <div style="position: relative;height: 60px;width: 100%;margin-left:60px;line-height:60px;">主页</div>

        <main>
            <!-- 左侧列表 -->
            <div  class="main-left" >
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="title" label="标题" width="232"></el-table-column>
                    <el-table-column prop="type" label="分类" width="232"></el-table-column>
                    <el-table-column prop="name" label="作者" width="232"></el-table-column>
                    <el-table-column prop="date" label="发布时间" width="232"></el-table-column>
                </el-table>

                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000" class="pages">
                </el-pagination>

                
            </div>
            <!-- 右侧列表 -->
            <div class="main-right">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>全站搜索</span>
                    </div>
                    <div>
                        <el-input v-model="input" placeholder="请输入内容" class="ipt1"></el-input>
                        <el-button type="primary" class="ipt2">搜索</el-button>
                    </div>
                </el-card>
                
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>点击排行</span>
                    </div>
                    <div v-for="(val,key) in tableData" :key="val" class="text item lists">
                        <i>{{key+1}}</i>
                        <span>{{val.title}}</span>
                        <span class="el-icon-star-on"></span>
                        <span>{{val.count}}</span>
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>最新文章</span>
                    </div>
                    <div v-for="(val,key) in tableData" :key="val" class="text item listss">
                        <i>{{key+1}}</i>
                        <span>{{val.title}}</span>
                        <span>{{val.date}}</span>
                    </div>
                </el-card>
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
                active: true,
                tableData: [{
                        title: '第一条',
                        type: '八维',
                        name: '张三',
                        date: '2017-10-01',
                        count:10
                    }, {
                        title:'第二条',
                        type:'技术',
                        name: '李四',
                        date: '2017-10-02',
                        count: 8
                    }, {
                        title:'第三条',
                        type:'八维',
                        name: '赵武',
                        date: '2017-10-03',
                        count: 5
                    }, {
                        title:'第四条',
                        type:'技术',
                        name: '王柳',
                        date: '2017-10-04',
                        count: 1
                    }]
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
main .main-left {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: tan;
    padding: 50px 15px;
}
main .main-left .pages{
    text-align: center;
    margin-top: 50px;
}
main .main-right {
    text-align: center;
    width: 400px;
    float: left;
}
main .main-right .ipt1{
    width:150px;
    float: left;
    margin-bottom: 15px;
}
main .main-right .ipt2{
    float: right;
    margin-right: 20px;
}
main .main-right .lists{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
main .main-right .lists span{
    flex:1;
    text-align: center;
}
main .main-right .lists i:first-child{
    background: blue;
    padding: 2px 5px;
    color:#fff;
}
main .main-right .listss{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
main .main-right .listss span{
    flex:1;
    text-align: center;
}
main .main-right .listss i:first-child{
    background: blue;
    border-radius: 50%;
    padding: 2px 5px;
    color:#fff;
}
.text {
    font-size: 14px;
}

.item {
margin-bottom: 18px;
}
.clearfix{
    background:rgb(16, 233, 233);
    padding: 2px 5px;
    border-radius:5px;
}
.clearfix:before,
.clearfix:after {
display: table;
content: "";
}
.clearfix:after {
clear: both
}

main .el-menu {
    background-color: transparent !important;
}
</style>