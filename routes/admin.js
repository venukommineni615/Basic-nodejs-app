const express=require('express')
const router=express.Router()
router.get('/add-product',(req, res, next)=>{
    res.send('<html><body><form method="post" action="/admin/product"><input type="text" name="title"/><input type="number" name="size"/> <button type="submit">submit</button></form></body></html>')
 })
 router.post('/product',(req, res, next)=>{
     const body = req.body
     console.log(body.title)
     console.log(body.size)
     res.redirect('/admin/add-product')
 })
 module.exports = router