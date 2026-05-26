import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const AuthScreen = () => {
const [email, setEmail] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signup?email="+ email);
};
return(
    <div className ="hero-bg relative">
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
            <img src="/netflix-logo.png" alt="Netflix Logo"  className="w-32 md:w-52"/>
            <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
                Sign In
            </Link>
        </header>
    </div>

    <div></div>
)
}
 export default AuthScreen;