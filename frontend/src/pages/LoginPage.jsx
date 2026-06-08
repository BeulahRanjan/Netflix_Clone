import React from 'react';
import {Link} from 'react-router-dom';
import { useAuthStore } from '../store/authUser';

function LoginPage(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login } = useAuthStore();


const handleSubmit = async(e) =>{
    e.preventDefault();
    login({email,password});
}
return(
    <div className='h-screen w-full hero-bg'>
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <Link to={"/"}>
            <img src="/netflix-logo.png" alt="Netflix" className='w-52' />
            </Link>
        </header>

        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className='w-full max-w-md p-8 space-y-6 bg-black/50 rounded-lg shadow-md'>
            <h1 className='text-center text-white text-2xl font-bold mb-4'>Login</h1>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <label htmlFor='email'  classname='text-sm font-medium text-gray-300 block'> Email</label>
                <input type='email' 
                 className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                 placeholder='your@example.com'
                 id='email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>

                 <label htmlFor='password' className='text-sm font-medium text-gray-300 block'> Password</label>
                 <input type='password' 
                 className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                 placeholder='********'
                 id='password'
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}/>

                 <button className='w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-800 focus:outline-none focus:ring' type='submit'>
                    Login
                 </button>
            </form>
            <div className='text-center text-gray-300'>
                Don't have an account? {"  "}
                <Link to='/signup' className='text-red-600 hover:underline'>
                Log In
                </Link>

            </div>
            </div>
        </div>
    </div>
)}

export default LoginPage;