import {React,useState} from 'react'
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { Info, Play } from 'lucide-react';
import useGetTrendingContent from "../hooks/useGetTrendingContent.jsx";
// import {MOVIE_CATEGORIES,ORIGINAL_IMG_URL, TV_CATEGORIES} from "../utils/constants.js";
import { useContentStore } from '../store/content.js';
// import MovieSlider from "../components/MovieSlider.jsx";


function HomeScreen() {
  return (
    <div></div>
  )
}

export default HomeScreen;