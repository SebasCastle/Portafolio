// import axios from "axios";
import type { GiphyGifResponse } from "../interfaces/giphy.responses";
import type { Gif } from "../interfaces/gif.interface";
import { GiphyApi } from "../../Api/ApiGiphy";

// const Api = 'veFYfud0Ar1R3Vl4wQfGHyrF9UyOLjjU';

export const GetGiftsByApi = async(query: string):Promise<Gif[]> => {
    if(query.trim().length===0){
        return [];
    }

    try{

        //axios es una libreria que nos ayudara a hacer la petición HTTP, como fech pero mejor
        // https://api.giphy.com/v1/stickers/search?api_key=veFYfud0Ar1R3Vl4wQfGHyrF9UyOLjjU&q=gatos&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
    const response= await GiphyApi<GiphyGifResponse>('/search',{
        params: {
        q:query,
        limit:10,
        }
        })
            return response.data.data.map((gif) =>({
            id: gif.id,
            title: gif.title,
            url:gif.images.original.url,
            width: Number(gif.images.original.width),
            height: Number(gif.images.original.width)
            
            }));

        // axios.get<GiphyGifResponse>(`https://api.giphy.com/v1/stickers/search`,{
        // params: {
        //     q:query,
        //     limit:10,
        //     lang:'es',
        //     api_key:import.meta.env.VITE_GIPHY_API_KEY
        // }
    
    }catch(error){
        console.error(error);
        return[];

    }



// console.log(response.data);


};
