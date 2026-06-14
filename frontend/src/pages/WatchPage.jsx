import {useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContentStore } from "../store/content"
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";
import { ORIGINAL_IMG_BASE_URL, SMALL_IMG_BASE_URL } from "../utils/constants.js";
import { formatReleaseDate } from "../utils/dataFunctions.js";
import WatchPageSkeleton from "../components/WatchPageSkeleton.jsx";

const WatchPage = () =>{

    const { id } = useParams();
    const [ trailers, setTrailers] = useState([]);
    const [currentTrailerIdx,setCurrentTrailerIdx] = useState(0);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState({});
    const [similarContent, setSimilarContent] = useState([]);
    const { contentType } =useContentStore();

    const sliderRef = useRef(null);

    useEffect(() =>{
        const getTrailers = async () => {
            try {
                const res =await axios.get(`/api/v1/${contentType}/${id}/trailers`);
                setTrailers(res.data.trailers);
            }
            catch(error){
                if(error.message.includes("404")){
                    setTrailers([]);
                }
            }
        };
        getTrailers();
    }, [contentType, id]);

    useEffect(() =>{
        const getSimilarContent =async () =>{
            try{
                const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
                setSimilarContent(res.data.similar);
            }
            catch(error){
                if(error.message.includes("404")) {
                    setSimilarContent([]);
                }
            }
        };
    getSimilarContent()},[contentType,id]);

    useEffect(() => {
        const getContentDetails = async () => {
            try{
                const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
                setContent(res.data.content);
            }
            catch(error){
                if(error.message.includes("404")){
                    setContent(null);
                }
            }
            finally{
                setLoading(false);
            }
        };
     getContentDetails();}, [contentType, id]);

     const handleNext = () => {
        if(currentTrialerIdx < trailers.length-1) setCurrentTrailerIdx(currentTrailerIdx + 1);
     };

     const handlePrev = () => {
        if(currentTTrailerIdx > 0) setCurrentTrailerIdx(currentTrailerIdx -1);
     };

     const scrollLeft = () => {
        if(sliderRef.current) sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth"});
     };

     const scrollRight = () => {
        if(sliderRef.current) sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior:"smooth"});
     };



}

export default WatchPage;
