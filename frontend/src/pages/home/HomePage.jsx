import HomeScreen from "../home/HomeScreen";
import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../../store/authUser";
import Navbar from "../../components/Navbar.jsx";
import MovieSlider from "../../components/MovieSlider.jsx";
import LoginPage from "../LoginPage.jsx";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <LoginPage /> }
        </div>
    )
}

export default HomePage;