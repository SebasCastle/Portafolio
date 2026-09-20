import {useRef, useState } from "react"
import type { Gif } from "../components/interfaces/gif.interface";
import { GetGiftsByApi } from "../components/Accions/get-gift-by-query.action";
//como no queremos que se renderize se pone fuera del componente, por ahora sera un hook
//    const giftsCache: Record<string, Gif[]>  = {}

export const useGifts = () =>{

    const [gifs, setGifs] = useState<Gif[]>([]);

   const [GiftsPrevious, SetTermsSearched] = useState<string[]>([]); 

   const giftsCache = useRef<Record<string, Gif[]>>({});


    const handelTermClicked = async(term:string) =>{
            //mando a rendereizar el array a gifts
            if(giftsCache.current[term]){
                setGifs(giftsCache.current[term]);
            return;
            }
            const gifts = await GetGiftsByApi(term);
            setGifs(gifts);

            giftsCache.current[term] = gifts;

    }

        const  handleSearch = async (query:string ='') =>{
            //funcion acyncrona para las busquedaas previas
            query = query.trim().toLocaleLowerCase();
            if(query.length==0) return;
            if(GiftsPrevious.includes(query))return;
            SetTermsSearched( [query, ...GiftsPrevious.splice(0,7)] )

            //paso la petición de mi searchbar a mi Api
            const gifs = await GetGiftsByApi(query);
            //mando a rendereizar el array a gifts
            setGifs(gifs);
            //guardar arrays de busquedas previas
            giftsCache.current[query] = gifs;
            // console.log(giftsCache);
        }

        return {
            //props
            gifs,
            //methods
            handleSearch,
            handelTermClicked,
            GiftsPrevious,
            
        }

}

    