const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get ('/inst',async(req,res)=>{
  const [id,name,password]=req.body
  if(!id || !name|| !password)
    res.send(400).json[message:'bad req']
  const [insrt]=await db.query('INSERT INTO new(id,name,password) VALUES(?,?,?)',[id,name,password])
  res.send(201).json [message:'good']
})



app.listen(port, () => {
  console.log(` heloo hello port ${port}`)
});
