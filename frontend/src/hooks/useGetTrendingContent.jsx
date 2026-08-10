import {useEffect, useState} from "react";
import {useContentStore} from "../store/content.js";
import axios from "axios";

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] =useState(null);
    const {contentType} = useContentStore();

    useEffect(() => {
        const getTrendingContent =async () =>{
            // const res =await axios.get(`/api/v1/${contentType}/trending`);
            // setTrendingContent(res.data.content);
            try {
            const res = await axios.get(
                `/api/v1/${contentType}/trending`
            );

            setTrendingContent(res.data.content);
        } catch (error) {
            console.log("Trending content error:", error);
            console.log("Server response:", error.response?.data);
        }
        };
        getTrendingContent();
    }, [contentType]);

    return {trendingContent};
    };
export default useGetTrendingContent;
