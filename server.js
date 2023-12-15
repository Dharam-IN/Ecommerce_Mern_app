import express from 'express'
import dotenv from 'dotenv'

// rest object
const app = express()

// config
dotenv.config()

// rest api
app.get("/", (req, res)=>{
    res.send({
        message: "Welcome to ecommerse app"
    })
})

const PORT = process.env.PORT

app.listen(PoRT, ()=>{
    console.log(`Server running on ${PORT}`)
})
