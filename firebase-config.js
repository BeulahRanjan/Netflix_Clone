import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBeNEP6jLaysUZ-oJT4KW2lDSHphLBnAHM",
  authDomain: "react-netflix-clone-40a81.firebaseapp.com",
  projectId: "react-netflix-clone-40a81",
  storageBucket: "react-netflix-clone-40a81.appspot.com",
  messagingSenderId: "260431843618",
  appId: "1:260431843618:web:b938a916a333d9bf9dd57b",
  measurementId: "G-659NK91MM6"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);