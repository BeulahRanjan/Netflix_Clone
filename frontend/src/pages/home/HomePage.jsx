import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../../store/authUser";
import SearchHistoryPage from "../SearchHistoryPage";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <SearchHistoryPage /> }
        </div>
    )
}

export default HomePage;