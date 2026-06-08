import React from 'react';
import {Link} from 'react-router-dom';
import { useAuthStore } from '../store/authUser';

function LoginPage(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login } = useAuthStore();
}

const handleSubmit = async(e) =>{
    e.preventDefault()
    login({email,password});
}

return(
    <div className='h-screen w-full hero-bg'>
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
            <Link to={"/"}>
            <img src="/netflix-logo.png" alt="Netflix" className='w-52' />
            </Link>
        </header>
    </div>
)
export default LoginPage;