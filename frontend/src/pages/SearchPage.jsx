import { useState } from "react";
import { useContentStore } from "../store/content";
import Navbar from "../components/Navbar.jsx";
import { Search } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants.jsx";
import { Link } from "react-router-dom";


