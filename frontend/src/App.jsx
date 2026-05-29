import { Navigate, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import {useEffect} from "react";
import {Loader} from "lucide-react";
import HomePage from "./home/HomePage";

function App(){
  const {user, isCheckingAuth, authCheck} = useAuthStore();
   console.log(user, isCheckingAuth);

   useEffect(() => {
    authCheck();
   }, [authCheck]);

    if(isCheckingAuth){
      return <div className="h-screen">
        <div className= "flex justify-center items-center h-full bg-black">
          <Loader classNamee= "animate-spin size-10 text-red-600" />
        </div>
      </div>
    }
    return(
      <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </>
    )
}

export default App;