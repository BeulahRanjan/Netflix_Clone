import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req,res){
    try{
        const {email ,password, username} = req.body;

        if(!email || !password || !username) {
            console.log(email,password, username);
            return res.status(400).json({success:false, message:'All fields are required'});
        }

        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({succcess:false, message })
        }

    }
}