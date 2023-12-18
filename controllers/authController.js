import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";

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

// export default {registerController};