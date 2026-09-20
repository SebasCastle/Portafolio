import { useEffect, useState, type KeyboardEvent } from "react";
// import { PreviousSearches } from "./Previous-searches";

interface Props{
    placeholder?: string;
    onQuery: (query:string) => void;
    // ListPreviousSearches ?:string [];
}

export const SearchBar = ({placeholder = 'buscar', onQuery}:Props)  => {
    const [query, setQuery] = useState('');


    useEffect(()=>{
        //funcion debounce
       const timeoutid = setTimeout(()=>{
            onQuery(query) //obtener el el ultimo valor de query after 700ms
        },700)
        return () =>{
            clearTimeout(timeoutid);//limpiar el querry

        }
    },[query,onQuery]);//como buena practica es indicar que parametros va a usar el hook


//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       onQuery(query);
//     }, 700);

//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [query, onQuery]);


    const handleSearch = () =>{
         onQuery(query);
    }


    const handleKeyDown : any = (event : KeyboardEvent<HTMLInputElement>) => {
                if(event.key=="Enter"){
                    handleSearch();
                }

    }

    return(
        <div className="search-container">
            <input type="text" name=""
            placeholder = {placeholder} 
            id="" 
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
