 import React from 'react';
 import { Link } from 'react-router-dom';
 import { useAuthStore } from '../store/authUser';
 
    const SignupPage = () => {

        const {searchParams} = new URL(document.location);
        const emailValue = searchParams.get('email')
        const [email, setEmail] = React.useState(emailValue || '');
        const [password, setPassword] = React.useState('');
        const {signup} = useAuthStore();

        const handleSubmit = async(e) => {
            e.preventDefault();
            signup({email,username,password});
        }

        return(
            <div className='h-screen w-full hero-bg'>
                <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
                    <Link to={"/"}>
                        <img src="/netflix-logo.png" alt="logo" className='w-52'/>
                    </Link>
                </header>
                
            </div>
        )
    }

    export default SignupPage;
 