const path=require('path')

const rootDir=require('../utils/path')

exports.getAddProduct=(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
 }

 exports.postProduct=(req, res, next)=>{
    const body = req.body
    console.log(body.title)
    console.log(body.size)
    res.redirect('/admin/add-product')
}

exports.getProducts=function (req, res){
    res.sendFile(path.join(rootDir, 'views','shop.html'));
}