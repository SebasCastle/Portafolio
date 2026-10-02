// import { mockGifs, } from "../../mock-data/gifts.mock"
import type { FC } from "react";
import type { Gif } from "./interfaces/gif.interface";

interface Props{
    gifts: Gif[];
}

export const GiftsList: FC <Props> = ({gifts}) => {
    return(
        <div className="gifs-container">
            {
                gifts.map((gif) =>(
                    <div key={gif.id} className="gift-card">
                        <img
                          src={gif.url}
                          alt={gif.title}
                          loading="lazy"
                          decoding="async"
                          width={gif.width || 200}
                          height={gif.height || 200}
                        />
                        <h3>{gif.title}</h3>
                        <p>{gif.width} x {gif.height}</p>
                    </div>
                ))
            }
        </div>
    )
}