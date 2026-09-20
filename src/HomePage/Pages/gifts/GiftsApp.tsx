// import { mockGifs } from "./mock-data/gifts.mock"
import { GiftsList } from "./components/Gifts-container";
import { useGifts } from "./Hooks/useGifts";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./shared/components/Previous-searches";
import { SearchBar } from "./shared/components/searchBar";
import "./gifts-app.css";
export const GiftApp = () => {

 const {handleSearch, GiftsPrevious , handelTermClicked,gifs} = useGifts();


    return (
        <>
        {/* Header */}
        <CustomHeader title="Buscador de gifts" description="Descubre y explora gifts"/>
            {/* {search} */}
            {/* searchBar */}
            <SearchBar onQuery={handleSearch}/>
            {/* {Busquedas previas} */}
            <PreviousSearches 
            searches={GiftsPrevious}
            onLabelClicked={handelTermClicked}
            />

        {/* {Gifts} */}
        <GiftsList gifts = {gifs}/>
        
        </>
    )
}