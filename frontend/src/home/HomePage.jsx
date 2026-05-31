import HomeScreen from "../home/HomeScreen";
import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../store/authUser";
import Navbar from "../components/Navbar";
import MovieSlider from "../components/MovieSlider";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <MovieSlider />}
        </div>
    )
}

export default HomePage;