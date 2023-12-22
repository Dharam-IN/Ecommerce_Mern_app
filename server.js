import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './router/authRouter.js'
import cors from 'cors'

// config env
dotenv.config()

// database config
connectDB();

// rest object
const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use(cors())
app.use('/api/v1/auth', authRoutes)

// rest api
app.get("/", (req, res)=>{
    res.send({
        message: "Welcome to ecommerse app"
    })
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})
