import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors())
app.get('/cadastro', async (req,res)=>{
    const usuarios = await prisma.usuario.findMany()
    res.status(200) .json(usuarios)
})

app.post("/cadastro", async (req,res) => {
      await prisma.usuario.create({
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade:req.body.idade
        }
    })
    res.status(201) .json(req.body)
})

app.put("/cadastro/:id", async (req,res) =>{
    await prisma.usuario.update({
        where: {
            id : req.params.id
        },
        data: {
            email: req.body.email,
            nome: req.body.nome,
            idade:req.body.idade
        }
    })
    res.status(201) .json({"message":"Usuário editado"})
})

app.delete("/cadastro/:id", async (req,res) =>{
    await prisma.usuario.delete({
        where: {
            id : req.params.id
        }
    })
    res.status(200) .json({"message":"Usuário deletado"})
})

app.listen(3000)
