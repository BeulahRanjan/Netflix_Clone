export async function signup(body,res){
     const {email ,password, username} = body;

     const data={
        email,
        password,
        username
     }

     return await authRepositary.signup(data,res);


}
export async function login(body, res){
    
   const {email, password} = body;

   const data={
    email,
    password
   }

   return await authRepositary.login(data, res);
}
export async function logout(res){
      return await authRepositary.logout(res);
}
export async function authCheck(user){
   return await authRepositary.authCheck(user);
} 