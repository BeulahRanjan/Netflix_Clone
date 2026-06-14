import AuthScreen from "../home/AuthScreen";
import {useAuthStore } from "../../store/authUser";
import WatchPageSkeleton from "../../components/WatchPageSkeleton.jsx";
const HomePage = () => {
    const {user} = useAuthStore();
    return(
        <div>
            {user ? <AuthScreen /> : <WatchPageSkleteton /> }
        </div>
    )
}

export default HomePage;