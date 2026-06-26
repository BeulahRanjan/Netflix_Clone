import jwt from 'jsonwebtoken';
// import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie= (userId,res) =>{
    const token =jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn :'17d'})
    res.cookie('jwt-netflix', token,{
        maxAge:17*24*60*60*1000,
        ttpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV !=='development',
    })
    return token;
};