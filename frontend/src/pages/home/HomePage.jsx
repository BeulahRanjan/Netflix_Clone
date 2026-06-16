import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../../store/authUser";
import SearchPage from "../SearchPage";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <SearchPage /> }
        </div>
    )
}

export default HomePage;