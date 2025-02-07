import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";

function ArtList() {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/art")
            .then(response => response.json())
            .then(data => setArtworks(data))  
            .catch(error => console.error('Error fetching data:', error));
    }, []);  

    return (
        <ul className="art-list">
            {artworks.map((artwork) => (
                <ArtListItem key={artwork.id} artwork={artwork} />
            ))}
        </ul>
    );
}

export default ArtList;
