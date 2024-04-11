const express=require('express')
const router=express.Router()
const path=require('path')
const rootDir=require('../utils/path')
router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
 }) 
 router.post('/product',(req, res, next)=>{
     const body = req.body
     console.log(body.title)
     console.log(body.size)
     res.redirect('/admin/add-product')
 })
 module.exports = router