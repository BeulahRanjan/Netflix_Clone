import React from 'react';
import {Link} from 'react-router-dom';
import { useAuthStore } from '../store/authUser';

function LoginPage(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login } = useAuthStore();
}