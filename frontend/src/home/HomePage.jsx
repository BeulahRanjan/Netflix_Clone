import HomeScreen from "../home/HomeScreen";
import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../store/authUser";
import Navbar from "../components/Navbar";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <Navbar />}
        </div>
    )
}

export default HomePage;