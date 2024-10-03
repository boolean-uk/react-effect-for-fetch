import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";


export default function ArtList(){
    const url = 'https://boolean-uk-api-server.fly.dev/art'
    const [artGallery, setArtGallery] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(setArtGallery)
        .then(() => console.log(artGallery))  
    },[])



    return(
        <ul>
            {artGallery.map((art)=>(
                <ArtListItem artObject={art} key={art.id}/>
            ))}
        </ul>
    );
}