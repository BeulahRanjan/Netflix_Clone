import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../../store/authUser";
import WatchPage from "../WatchPage";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <WatchPage /> }
        </div>
    )
}

export default HomePage;