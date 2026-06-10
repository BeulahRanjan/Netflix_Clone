import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../../store/authUser";
import NotFoundPage from "../404.jsx";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <NotFoundPage /> }
        </div>
    )
}

export default HomePage;