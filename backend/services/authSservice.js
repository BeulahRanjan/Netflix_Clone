export async function signup(body,res){
     const {email ,password, username} = body;

     const data={
        email,
        password,
        username
     }

     return await authRepositary.signup(data,res);


}
export async function login{
    
}
export async function logout{}
export async function authCheck{}