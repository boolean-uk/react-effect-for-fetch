import ArtListItem from "./ArtListItem"
import { useState, useEffect } from 'react'

export default function ArtList() {
    const [artData, setArtData] = useState([])

    useEffect(() => {
      fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => response.json())
      .then(setArtData)
    }, [])

    return(
        <ul className="art-list">
          {artData.map((item, index) => {
            return <ArtListItem key={index} item={item} />
          })}
        </ul>
    )
}