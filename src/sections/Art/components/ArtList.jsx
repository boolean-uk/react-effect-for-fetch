import { useState, useEffect } from "react";
import ArtListItem from "./ArtListItem";

function ArtList() {
  const url = "https://boolean-uk-api-server.fly.dev"

  const [artList, setArtList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const artUrl = `${url}/art`
      const response = await fetch(artUrl)
      const jsonData = await response.json()
      setArtList(jsonData)
    }
    fetchData()
  })
  
  return (
    <ul className="art-list">
      {artList.map((item, key) => (
        <ArtListItem item={item} key={key}/>
      ))}
    </ul>
  )
}

export default ArtList