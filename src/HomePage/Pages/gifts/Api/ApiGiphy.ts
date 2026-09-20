import axios from "axios";

export const GiphyApi = axios.create({
// https://api.giphy.com/v1/stickers/search?api_key=veFYfud0Ar1R3Vl4wQfGHyrF9UyOLjjU&q=gatos&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

    baseURL:'https://api.giphy.com/v1/gifs',
        params: {
        lang:'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY
    }
})