import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constants";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

function formatData(dateString) {
    const date = new Date(dateString);

    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
}

const SearchHistoryPage = () => {
    const [searchHistory,setSearchHistory]= useState([]);

    useEffect(()=>{
        const getSearchHistory = async()=>{
            try{
                const res = await axios.get(`/api/v1/search/history`);
                setSearchHistory(res.data.content);
            }
            catch(error){
                console.log(error);
                setSearchHistory([]);
            }
        };
        getSearchHistory();
    },[]);

    const handleDelete= async(entry)=>{
        try{
            await axios.delete(`/api/v1/search/history/${entry.id}`);
            setSearchHistory(searchHistory.filter((item) => item.id !== entry.id));
        }
         catch(error){
            console.log(error);
            toast.error("Failed to delete search item");
         }
    };

    if(searchHistory?.length ===0){
        return (
            <div className="bg-black min-h-screen text-white">
                <Navbar/>
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">Search History</h1>
                    <div className="flex justify-center items-center h-96">
                        <p className="text-xl">No search history found</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchHistoryPage;
