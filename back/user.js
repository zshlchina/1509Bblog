const express = require("express");
const router = express.Router();
const creatTime = require('../common/creatTime');
const Unique = require('../common/Unique');
const {
    sqlHandle,
    readHandle,
    searchHandle,
    searchHandleNormal,
    query
  } = require('../../config/db_connect');
//用户登陆接口
router.post('/login', (req, res, next) => {
    const sql = `select * from user where name='${req.body.name}'`
    query(sql).then((data)=>{
          if(data.length===0){
            res.send({
              code:"0006",
              msg:"用户名不存在"
            })
            return 
          }
          if(data[0].password===req.body.password){
            res.send({
              code:"0003",
              msg:"登录成功",
              userId:data[0].id,
              name:data[0].name
            })
          }else{
            res.send({
              code:"0004",
              msg:"密码错误"
            })
          }
   }).catch((err)=>{
     res.send({
           code:"0005",
           msg:"操作错误",
           err
         })
   })
})
// 用户创建的接口
router.post('/createUser', (req, res, next) => {
    let privilege = req.body.privilege || 0
    const sql = `insert into user(id,name,password,privilege) values('${Unique()}','${req.body.name}','${req.body.password}','${privilege}')`
  sqlHandle(sql).then((data) => {
        res.send({
             code: '0001',
             data,
             msg:'用户创建成功'
        })
    }).catch((err) => {
        res.send({
             code: '0002',
             err,
             msg:'用户创建失败'
        })
    })
})
// 检测用户存不存在接口
router.post("/test",(req,res,next)=>{
  const sql=`select id from user where id='${req.body.id}'`
  searchHandleNormal(sql).then((data)=>{
        res.send({
          code:"0006",
          msg:"用户存在"
        })
   }).catch((err)=>{
     res.send({
           code:"0007",
           msg:"用户id不存在",
           err
         })
   })
})
module.exports = router;