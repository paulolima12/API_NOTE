import express from 'express'

const app = express()
app.use(express.json())

let users = []

app.get('/cadastro',(req,res)=>{
    res.json(users)
})

app.post("/cadastro", (req,res) => {
    users.push(req.body)
    res.send("Usuário criado!")
})

app.listen(3000,()=>{
    console.log('Servidor....')

})
