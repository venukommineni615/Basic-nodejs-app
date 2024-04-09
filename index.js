const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended:false }))
app.get('/add-product',(req, res, next)=>{
   res.send('<html><body><form method="post" action="/product"><input type="text" name="title"/><input type="number" name="size"/> <button type="submit">submit</button></form></body></html>')
})
app.post('/product',(req, res, next)=>{
    const body = req.body
    console.log(body.title)
    console.log(body.size)
    res.redirect('/add-product')
})

app.listen(4000)