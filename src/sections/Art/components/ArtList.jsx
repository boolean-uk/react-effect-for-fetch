import { useEffect, useState } from "react"
import ArtListItem from "./ArtListItem"

function ArtList () {
      const url = "https://boolean-uk-api-server.fly.dev/art"
      const [artWorks, setArtworks] = useState([])
    
      useEffect(() => {
        const fetchArt = async () => {
            const response = await fetch (url);
            const jsonData = await response.json();
            setArtworks(jsonData);
        }
        fetchArt();
      }, [])

    return(
        <ul className="art-list">
            {artWorks.map((artwork, index) => (
                <ArtListItem key={index} artwork={artwork}/>
            ))}
        </ul>
    )
}

export default ArtList