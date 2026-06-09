import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../../store/authUser";
import SignupPage from "../SignupPage.jsx";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <SignupPage /> }
        </div>
    )
}

export default HomePage;