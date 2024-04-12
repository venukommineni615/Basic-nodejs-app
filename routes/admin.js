const express=require('express')
const router=express.Router()

const productContoller=require('../controllers/product')

router.get('/add-product', productContoller.getAddProduct) 
 router.post('/product', productContoller.postProduct)
 module.exports = router