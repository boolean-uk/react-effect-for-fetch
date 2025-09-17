
import { useState, useEffect } from "react"
import ArtListItem from "./ArtListItem"

export default function ArtList() {

  const [artList, setArt] = useState([])

  useEffect(() => {

    fetch('https://boolean-uk-api-server.fly.dev/art')
    .then(res => res.json())
    .then(data => setArt(data))

  }, [])

  return (
    <ul className="art-list">
      {artList.map(art => (
        <ArtListItem key={art.id} artInfo={art} />
      ))}
    </ul>
  )

}