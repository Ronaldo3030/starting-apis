const express = require('express')
const app = express()
const PORT = 3000

const db = require('./db.json')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/showdb', (req,res) => {
    const users = db.users

    let login = []
    let name = []
    let age = []

    for(let user of users){
        login.push(user.login)
        name.push(user.name)
        age.push(user.age)
    }
    res.json(name)
})

app.post('/adduser', (req,res) =>{
    let login = req.body.login
    let name = req.body.name
    let age = req.body.age

    if(!login){
        res.status(442).json({message: "O campo login é obrigatorio"})
        return
    }else if(!name){
        res.status(442).json({message: "O campo name é obrigatorio"})
        return
    }else if(!age){
        res.status(442).json({message: "O campo age é obrigatorio"})
        return
    }
    
    res.status(201).json({login: login, name: name, age: age})
})

app.listen(PORT, () =>{
    console.log(`Running in localhost:${PORT}`)
})