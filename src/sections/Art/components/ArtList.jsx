import { useState, useEffect } from "react"
import ArtListItem from "./ArtListItem"

function ArtList() {

    const [art, setArt] = useState([])

    const getArt = () => {
      fetch('https://api.artic.edu/api/v1/artworks?limit=100')
        .then(res => res.json())
        .then(data => {
          const filteredData = data.data.filter((art) => art.image_id)
          console.log(filteredData)
          setArt(filteredData)
        })
    }
  
    useEffect(getArt, [])

    return (
        
       art.map((artPiece, index) => (
            <ArtListItem 
            artPiece={artPiece} 
            key={index}
            art={art}/>
             ))

    )
    
}

export default ArtList