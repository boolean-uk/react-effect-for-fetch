import { useEffect, useState } from "react"
import ArtListItem from "./ArtListItem"

function ArtList(){
    const [artworks, setArtWorks] = useState([])

    useEffect(() => {
  
      fetch(`https://api.artic.edu/api/v1/artworks?limit=20`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.data)
          setArtWorks(data.data)
  
        })
    }, [])

    return(
        <ul className="art-list">
            {artworks.map((artwork, index) =>  (
                <ArtListItem artwork={artwork} index={index} />
            ))}
        </ul>
    )

}
export default ArtList;