import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`
    },

})
