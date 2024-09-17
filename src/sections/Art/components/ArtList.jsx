import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";

function ArtList() {
    const [artData, setArtData] = useState([]);
  
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/art`)
        .then(response => response.json())  // Fix: Invoke the json() method
        .then(setArtData)
        .catch(error => console.error('Error fetching data:', error));
        console.log(artData)
    }, []);

    return(
        <ul className="art-list">
            {artData.length === 0 ? (
                <p>Can't find art</p>
            ) : (
                <ul> 
                    {artData.map((art, index) =>
                    <ArtListItem key={index}
                        title={art.title}
                        artist={art.artist}
                        imageURL={art.imageURL}
                        publicationHistory={art.publicationHistory}/>)}
                </ul>
            )}
        </ul>
    )
}

export default ArtList