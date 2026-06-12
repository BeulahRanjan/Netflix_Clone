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
