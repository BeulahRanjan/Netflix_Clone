// import authRepositary from "../repositaries/authRepositary.js";
import {
    signup as repositorySignup,
    login as repositoryLogin,
    logout as repositoryLogout,
    authCheck as repositoryAuthCheck
} from "../repositaries/authRepositary.js";

export async function signup(body,res){
     const {email ,password, username} = body;

     const data={
        email,
        password,
        username
     }

     return await repositorySignup(data, res);


}
export async function login(body, res){
    
   const {email, password} = body;

   const data={
    email,
    password
   }

   return await repositoryLogin(data, res);
}
export async function logout(res){
      return await repositoryLogout(res);
}
export async function authCheck(user){
   return await repositoryAuthCheck(user);
} 