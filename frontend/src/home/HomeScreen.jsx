import {React,useState} from 'react'
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { Info, Play } from 'lucide-react';
import useGetTrendingContent from "../hooks/useGetTrendingContent.jsx";
import {MOVIE_CATEGORIES,ORIGINAL_IMG_URL, TV_CATEGORIES} from "../utils/constants.js";
import { useContentStore } from '../store/content.js';
import MovieSlider from "../components/MovieSlider.jsx";


function HomeScreen() {
  const { trendingContent} =useGetTrendingContent();
  const {contentType } = useContentStore();
  const {imgLoading, setImgLoading} = useState(true);

  if(!trendingContent) 
  return (
    <div className='h-screen text-white relative'>
      <Navbar />
      <div className ='absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer'/>
    </div>
  );

  return (
    <>
    <div className='relative h-screen text-white'>

    </div>
    </>
  )
}

export default HomeScreen;