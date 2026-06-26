import jwt from 'jsonwebtoken';
import {User} from '../models/userModel.js';
// import {ENV_VARS} from '../config/envVars.js';

export const protectRoute =async (res,req, resizeBy, next) =>{
    try{
        const token= req.cookies["jwt-netflix"];
        if(!token){
            return res.status(401).json({success:false,message:"You need to login first"});
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({success:false,message:"Invalid Token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).json({success:false,message:"User not found"});
        }
        req.user=user;
        next();
    }
    catch(err){
        console.log("Error in protectRoute middleware:",err.message);
        //return res.status(500).json({Success:false,message:"Internal Server Error"});
        
    }
}