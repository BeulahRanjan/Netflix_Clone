import {useEffect, useState} from "react";
import {useCOntentStore} from "../store/content.js";
import axios from "axios";

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] =useState(null);
    const {contentType} = useCOntentStore();

    useEffect(() => {
        const getTrendingContent =async () =>{
            const res =await axios.get(`/api/v1/${contentType}/trending`);
            setTrendingContent(res.data.content);
        };
        getTrendingContent();
    }, [contentType]);

    return {trendingContent};
    };
export default useGetTrendingContent;
