import { useState } from "react";
import { useContentStore } from "../store/content";
import Navbar from "../components/Navbar.jsx";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants.jsx";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const [activeTab, setActiveTab] = useState("movie");
    const [searchTerm, setSearchTerm] = useState("");

    const [results, setResults]=useState([]);
    const {setContentType} = useContentStore();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        tab === "movie"? setContentType("movie") : setContentType("tv");
        setResults([]);
    };

    const handleSearch = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.get(`/api/v1/search/${activeTab}/${searchTerm}`);
            setResults(res.data.content);
        } catch(error){
            if(error.response.status === 404){
                toast.error("Nothing found, make sure you are searching under the right category");
            } else {
                toast.error("An error ocurred, please try again later");
            }
        }
    };

    return(
        
    )
}

export default SearchPage;