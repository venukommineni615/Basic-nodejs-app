const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
app.use(bodyParser.urlencoded({ extended:false }))
app.use('/admin', adminRoutes)
app.use('/shop',shopRoutes)
app.use((req,res)=>{
    res.status(404)
    res.send('404 Not Found')
})

app.listen(4000)