import jwt from 'jsonwentoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie= (userId,res) =>{
    const token =jwt.sign({userId}, ENV_VARS.JWT_SECRET, {expiresIn :'17d'})
    res.cookie('jwt-netflix', token,{
        maxAge:17*24*60*60*1000,
        ttpOnly:true,
        sameSite:"strict",
        secure:ENV_VARS.NODE_ENV !=='development',
    })
    return token;
};