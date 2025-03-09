import axios from "axios";

const apiClient = axios.create({
    baseURL: "  url: 'https://yelp-business-api.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'd755c0b509msh3d7fac84b1a61f3p1c63d1jsn4d312e4dcf62',
        'x-rapidapi-host': 'yelp-business-api.p.rapidapi.com'
    }
});

export default apiClient;