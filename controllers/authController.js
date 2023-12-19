import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken'

// POST REGISTER
export const registerController = async(req,res)=>{
    try {
        const {name, email, password, phone, address} = req.body;

        // validation
        if(!name || !email || !password || !phone || !address){
            return res.send({error: "Fill all fields"})
        }

        // User Check exist or not
        const exisitingUser = await userModel.findOne({email});
        
        if(exisitingUser){
            return res.status(200).send({
                success: true,
                message: 'Already Register please login'
            })
        }

        // password hashed
        const hashedPassword = await hashPassword(password)

        // save
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save();
        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in registeration",
            error
        })
    }
}

// POST LOGIN
export const loginController = async(req, res)=>{
 try {
    const {email, password} = req.body;

    // validation

    if(!email || !password){
        res.status(404).send({
            success: false,
            message: "Invalid email or password"
        })
    }

    // check password
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).send({
            success: false,
            message: "Email is not registerd"
        })
    }

    const match = await comparePassword(password, user.password)
    if(!match){
        return res.status(200).send({
            success: false,
            message: "Invalid Password"
        })
    }

    const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET,{
        expiresIn: "7d"
    });

    res.status(200).send({
        success: true,
        message: "Login Successfully",
        user:{
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        },
        token
    })

 } catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: "Error in login",
        error
    })
 }   
}

// test controller
export const testController = (req, res)=>{
    res.send("Protected Route")
    console.log("india")
}

// export default {registerController};