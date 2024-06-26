import { useEffect, useState } from "react"
import ArtListItem from './ArtListItem'

export default function ArtList() {

  const[art, setArt] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => response.json())
      .then(setArt)
      return;
  }, [])

    return (
        <ul className="art-list">
          <ArtListItem art={art}/>
        </ul>
    )
}