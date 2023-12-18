import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()
const DB = process.env.MONGO_URL

const connectDB = async (req, res)=>{
    try {
        const conn = await mongoose.connect(DB)
        console.log("Database Connected")
    } catch (error) {
        console.log(`Error Fetch in Database: ${error}`)
    }
}

export default connectDB;