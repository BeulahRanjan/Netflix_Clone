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
    }

    export default SignupPage;
 