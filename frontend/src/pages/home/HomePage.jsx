import AuthScreen from "../home/AuthScreen.jsx";
import HomeScreen from "../home/HomeScreen.jsx"
import {useAuthStore } from "../../store/authUser";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <HomeScreen /> : <AuthScreen /> }
        </div>
    )
}

export default HomePage;