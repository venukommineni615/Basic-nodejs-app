const express = require('express')
const app = express()

app.use((req, res, next)=>{
    console.log('first middleware called')
    next()
})
app.use((req, res, next)=>{
    console.log('second middleware called')
    res.send({name:"venu"})
})

app.listen(4000)