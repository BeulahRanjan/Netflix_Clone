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
