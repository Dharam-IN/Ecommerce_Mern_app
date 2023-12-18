import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
        trim: true
    },
    email:{
        required: true,
        type: String,
        unique: true
    },
    password:{
        required: true,
        type: String
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    role:{
        type: Number,
        default: 0
    }
}, {timestamps: true});

export default mongoose.model("users", userSchema);
