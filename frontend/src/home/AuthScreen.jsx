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

        <div className="flex flex-col items-center justify-center  text-center py-40 text-white max-w-6xl mx-auto">
            <h1 className='text-4xl md:text-6xl font-bold mb-4'> Unlimited movies, TV shows, and more</h1>
            <p className='text-lg mb-4'> Watch anywhere. Cancel anytime</p>
            <p className='mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>

            <form className ='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </form>
        </div>
    </div>

    
)
}
 export default AuthScreen;