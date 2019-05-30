const express = require('express')
const setContr = require('../controller/setContr.js')
const router = express.Router()

router.get('/nav-menus', setContr.nav_menus) // 得到导航菜单的静态页面
    .get('/getMenuList', setContr.getMenuList) // 得到导航菜单的所有数据
    .post('/addMenus', setContr.addMenus) // 新增导航菜单
    .get('/delUser', setContr.delUser)   // 添加一个删除数据的路由

module.exports = router