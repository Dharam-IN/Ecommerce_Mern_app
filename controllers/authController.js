import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken'

// POST REGISTER
export const registerController = async(req,res)=>{
    try {
        const {name, email, password, phone, address, answer} = req.body;

        // validation
        if(!name || !email || !password || !phone || !address || !answer){
            return res.send({message: "Fill all fields"})
        }

        // User Check exist or not
        const exisitingUser = await userModel.findOne({email});
        
        if(exisitingUser){
            return res.status(200).send({
                success: false,
                message: 'Already Register please login'
            })
        }

        // password hashed
        const hashedPassword = await hashPassword(password)

        // save
        const user = await new userModel({name, email, phone, address, password:hashedPassword, answer}).save();
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
            address: user.address,
            role: user.role
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

// forgot password

export const forgotpasswordcontroller = async(req, res)=>{
    try {
        const {email, answer, newPassword} = req.body;
        if(!email){
            res.status(400).send({message: "Email is Required"});
        }
        if(!answer){
            res.status(400).send({message: "Answer is Required"});
        }
        if(!newPassword){
            res.status(400).send({message: "New Password is Required"});
        }

        // check
        const user = await userModel.findOne({email, answer});

        // validation
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Wrong Email OR Answer",
            });
        }

        const hashed = await hashPassword(newPassword);

        await userModel.findByIdAndUpdate(user._id, {password: hashed});
        res.status(200).send({
            success: true,
            message: "Forgot Password Successfully"
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Something went wrong forgot password",
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