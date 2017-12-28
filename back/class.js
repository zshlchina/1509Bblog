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
// 插入一级类名接口
router.post('/insertOneClass', (req, res, next) => {
    const {enname_one, cnname_one,enname_two,cnname_two} = req.body;
    const oneId = Unique();
    // 查询一级类名
    const testOneSql = `select * from one_class where enname='${enname_one}'`;
    // 查询二级类名
    const testTwoSql = `select id, article_num from two_class where enname='${req.body.enname_two}'`;
    // 插入一级类名
    const insertOneSql = `insert into  one_class(id,enname,cnname,time) values('${oneId}','${enname_one}','${cnname_one}','${creatTime()}')`;
     // 插入二级类名
    const insertTwoSql = `insert into  two_class(id,parent_id,enname,cnname,time) values('${Unique()}','${oneId}','${enname_two}','${cnname_two}','${creatTime()}')`;
    // 创建文章表
    var createTable = `CREATE TABLE ${req.body.enname_one} (LIST INT(11) UNIQUE NOT NULL AUTO_INCREMENT, id VARCHAR(255) UNIQUE PRIMARY KEY, oneId VARCHAR(255), twoId VARCHAR(255), article_name VARCHAR(255), editer VARCHAR(255), content LONGTEXT, TIME DATETIME, visitors INT, daodu VARCHAR(255), imgsrc VARCHAR(255), recommend TINYINT, art_show TINYINT);`

    const insertOneAsync = async function () {
        await searchHandle(testOneSql)
        await searchHandle(testTwoSql)
        await sqlHandle(insertOneSql)
        await sqlHandle(insertTwoSql)
        await query(createTable)
        return 'ok'
    }
    insertOneAsync().then((data) => {
            res.send({
                code: '1010',
                msg: '一级类名插入成功'
            })
    }).catch((err) => {
         res.send({
                code: '1011',
                msg: '一级类名插入失败'
            })
    })
})
//修改一级类名接口
router.post('/amendOneClass', (req, res, next) => {
    const {enname_one, cnname_one,oldenname_one} = req.body;
    const oneId = Unique();
    const updatesql = `update one_class set enname = '${enname_one}',
          cnname='${cnname_one}', time ='${creatTime()}' where enname ='${enname_one}'`
   // 创建文章表
     const amendTable = `alter table ${oldenname_one} rename ${enname_one}`
     const amendOneAsync = async function () {
       await sqlHandle(updatesql)
        await query(amendTable)
        return 'ok'
    }
    amendOneAsync().then((data) => {
            res.send({
                code: '1013',
                msg: '一级类名修改成功'
            })
    }).catch((err) => {
         res.send({
                code: '1014',
                msg: '一级类名修改失败'
            })
    })
})
//删除一级类名接口
router.post('/deleteClassone', (req, res, next) => {
    const {enname_one, id} = req.body;
    const sqlone = `delete from one_class where id='${id}'`
    const sqltwo = `delete from two_class where parent_id='${id}'`
    const sqlarticle = `DROP TABLE ${enname_one}`
    const deleteOneAsync = async function () {
        await query(sqlone)
        await query(sqltwo)
        await query(sqlarticle)
        return 'ok'
    }
    deleteOneAsync().then((data) => {
        res.send({
            code: '2010',
            data,
            msg: '一级类名删除成功'
        })
    }).catch((err) => {
        res.send({
            code: '2011',
            err,
            msg: '一级类名删除失败'
        })
    })
})
// 插入二级类名接口
router.post('/insertTwoClass', (req, res, next) => {
    const {enname_two,cnname_two} = req.body;
    const oneId = Unique();
    // 查询二级类名
    const testTwoSql = `select id, article_num from two_class where enname='${enname_two}'`;
    // 插入二级类名
    const insertTwoSql = `insert into  two_class(id,parent_id,enname,cnname,article_num,time) values('${Unique()}','${oneId}','${enname_two}','${cnname_two}','${creatTime()}')`;
    const insertTwoAsync = async function () {
        await searchHandle(testTwoSql)
        await sqlHandle(insertTwoSql)
        return 'ok'
    }
    insertTwoAsync().then((data) => {
            res.send({
                code: '2001',
                msg: '二级类名插入成功'
            })
    }).catch((err) => {
         res.send({
                code: '2002',
                msg: '二级类名插入失败'
            })
    })
})
//修改二级类名接口
router.post('/amendTwoClass', (req, res, next) => {
    const updatesql = `update two_class set enname = '${req.body.enname}',
          cnname='${req.body.cnname}', time ='${creatTime()}' where id ='${req.body.id}'`
  
    sqlHandle(updatesql).then((data) => {
            res.send({
                code: '2004',
                msg: '二级类名修改成功'
            })
    }).catch((err) => {
         res.send({
                code: '2003',
                msg: '二级类名修改失败'
            })
    })
})
//删除二级类名接口
router.post('/deleteClasstwo', (req, res, next) => {
    //在二级分类中删除当前分类
    const sqltwo = `delete from two_class where id='${req.body.twoId}'`
    // 在二级分类中查询是否还有当前一级分类中的数据
    const selecttwo = `select * from two_class where parent_id='${req.body.oneId}'`
    // 如果在二级分类中还有当前一级分类的数据，则在文章表中删除相应二级分类的数据
    const sqlarticle = `delete from ${req.body.enname_one}  where twoId='${req.body.twoId}'`
    // 如果在二级分类中无当前一级分类的数据，则在删除当前一级分类，以及删除当前一级分类的表
    const sqlone = `delete from one_class where id='${req.body.oneId}'`
    const sqldrop = `DROP TABLE ${req.body.enname_one}`
    const deleteTwoAsync = async function () {
        await sqlHandle(sqltwo)
        const twoClassArr = await query(selecttwo)
        if (twoClassArr.length > 0) {
            await query(sqlarticle)
            return 'ok'
        } else {
            await sqlHandle(sqlone)
            await query(sqldrop)
            return 'ok'
        }
        
    }
    deleteTwooAsync().then((data) => {
        res.send({
            code: '2016',
            data,
            msg: '二级类名删除成功'
        })
    }).catch((err) => {
        res.send({
            code: '2015',
            err,
            msg: '二级类名删除失败'
        })
    })
})
// 获取一级类名列表
router.get('/getOneClass', (req, res, next) => {
    const sqlOne =  `select * from one_class`
    readHandle(sqlOne).then((data) => {
        res.send({
            code: '1218',
            data,
            msg: '取一级类名列表成功'
        })
    }).catch((err) => {
         res.send({
            code: '1217',
            data,
            msg: '取一级类名列表失败'
        })
    })
})
// 获取二级类名列表
router.get('/getTwoClass', (req, res, next) => {
    const sqlOne =  `select * from two_class`
    readHandle(sqlOne).then((data) => {
        res.send({
            code: '1121',
            data,
            msg: '获取二级类名列表成功'
        })
    }).catch((err) => {
         res.send({
            code: '1122',
            err,
            msg: '获取二级类名列表失败'
        })
    })
})
// 获取树状结构的分类列表
router.get("/getClassList",(req,res,next)=>{
  const sqlOne=`select * from one_class`
  const sqlTwo=`select * from two_class`

  const asyncGetClass= async function (params) {
    const classOneList= await readHandle(sqlOne)
    const classTwoList= await readHandle(sqlTwo)
    return {classOneList,classTwoList}
}
asyncGetClass().then((data)=>{
      let result=[]
      data.classOneList.forEach((i)=>{
          let obj={
            oneClass:i,
            twoClass:[]
          }
          data.classTwoList.forEach((j)=>{
            if(i.id==j.parent_id){
              obj.twoClass.push(j)
            }
          })
          result.push(obj)
        })

        res.send({
          code:"1135",
          msg:"数据获取成功",
          data:result
        })
    }).catch((err)=>{
      res.send({
            code:"1136",
            msg:"数据获取失败",
            err
          })
    })
  
})

module.exports = router;



















// 用户登录接口
router.post('/', (req, res, next) => {
    const sql = `select * from user`;
    query(sql, (err, rows, fields) => {
        let state = false;
        let user = false;
        let userI = null;
        row.forEach((i) => {
            if (req.body.loginname === i.name) {
                user = true
                state = req.body.loginpw === i.password
                userI = i
            }
        })
        if (user) {
            if (state) {
                res.send({
                    code: '1001',
                    userId : userI.id,
                    msg: '登陆成功'
                })
            } else {
                 res.send({
                    code: '1002',
                    userId : null,
                    msg: '登陆失败'
                })
            }
        } else {
             res.send({
                    code: '1003',
                    userId : null,
                    msg: '用户名不存在'
                })
        }
    })
})
module.exports = router;