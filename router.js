const fs=require("fs");
function handler(req, res){
if(req.url==='/'){
    let label=fs.readFileSync('./name.txt')
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write('<form method="post" action="/message">')
  res.write('<label for="userId">'+label+'</label>')
  res.write('<input id="userId" type="text" name="user"></input>')
  res.write('<button type="submit">Submit</button>')
  res.write('</form>')
  return res.end()
 }
 if(req.url==='/message'){
    const myText=[]
    req.on('data',(data)=>{
       
       myText.push(data)
    })
    req.on('end',()=>{
       
       const bufferedMessage=Buffer.concat(myText).toString()
       const user=bufferedMessage.split('=')[1]
       fs.writeFile('./name.txt',user,(error)=>{
          if(error){
             console.log('error',error)
          }else{
             console.log('success')
          }
       })
       res.setHeader('Location','/')
       res.statusCode = 302
       res.end()
    })
 }}
 module.exports=handler;