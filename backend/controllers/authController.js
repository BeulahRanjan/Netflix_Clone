import { User } from "../models/userModel.js";
import bcrypt from 'bcrypt'
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req,res,next){
    try{
         const {email ,password, username} = req.body;

        // if(!email || !password || !username) {
        //     console.log(email,password, username);
        //     return res.status(400).json({success:false, message:'All fields are required'});
        // }

        // const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if(!emailRegex.test(email)) {
        //     return res.status(400).json({succcess:false, message:'Invalid email address'});
        // }

        // if(password.length < 6) {
        //     return res.status(400).json({success:false, message:'Password must be atleast 6 characters'});
        // }

        // const existingUserByEmail = await User.findOne({email:email});
        // if(existingUserByEmail) {
        //     return res.status(400).json({success:false, message:'Email already exists'});
        // }

        // const existingUserByUsername = await User.findOne({username:username});
        // if(existingUserByUsername) {
        //     return res.status(400).json({success:false, message:'Username already exists'});
        // }

        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);;

        // const Profile_pice=["/avatar1.png","/avatar2.png","/avatar3.png"];
        // const image=Profile_pice[Math.floor(Math.random()*Profile_pice.length)];

        // const newUser = new User({
        //     email,
        //     password:hashedPassword,
        //     username,
        //     image
        // });
        // generateTokenAndSetCookie(newUser._id,res);
        // await newUser.save();

        const user= await authService.signup(req.body, res);
        res.status(201).json({
            success:true,
            user:{
                ...newUser._doc,
                password:"",
            }
        });
    }
    catch(error){
        // console.error('signup error:', error.message);
        // res.status(500).json({success:false, message:'Internal server error'});
        // process.exit(1);
        next                                                                                                                                                                                               (error);
    }
}

export async function login(req,res){
    try{
        // const {email, password} = req.body;

        // if(!email || !password) {
        //     return res.status(400).json({success:false, message:'All fields are required'});
        // }
        // const user = await User.findOne({email:email});
        // if(!user) {
        //     return res.status(400).json({success:false, message:'Invalid credentials'});
        // }

        // const isPassword = await bcrypt.compare(password, user.password);
        // if(!isPassword) {
        //     return res.status(400).json({success:false, message:'Invalid credentials'});
        // }

        // generateTokenAndSetCookie(user._id,res);

        const user = await authService.login(req.body,res);
        res.status(200).json({
            success:true,
            user
            // :{
            //     ...user._doc,
            //     password:"",
            // }
        });
    }
    catch(error){
        next(error);

        // console.error('login error:', error.message);
        // res.status(500).json({success:false, message:'Internal server error'});
    }
}

export async function logout(req,res){
    try{
        // res.clearCookie('jwt-netflix');

        await authService.logout(res);
        res.status(200).json({success:true, message:'Logged out successfully'});
    }
    catch(error){
        next(error);

        // console.error('logout error:', error.message);
        // res.status(500).json({success:false, message:'Internal server error'});
    }
}

export async function authCheck(req,res){
    try{
        const user= await authService.authCheck(req.user);
        res.status(200).json({success:true, user});
    }
    catch(error){
        next(error);

        // console.error('authCheck error:', error.message);
        // res.status(500).json({success:false, message:'Internal server error'}); 
    }
}