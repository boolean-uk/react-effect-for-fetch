import { useState } from "react"
import { useEffect } from "react"
import ArtListItem from "./ArtListItem"

const URL = "https://boolean-api-server.fly.dev"

function ArtList(){

    const [data, setData] = useState([])

    useEffect(() => {
      fetch(`${URL}/art`, {}).then(
        (response) => {
          return response.json();
        }).then((jsonData) =>{
          console.log(jsonData)
          setData(jsonData)
        })
        }, [])
  
    return (
        <ul className = "art-list">
        {data.map((item, index) => {
            return <ArtListItem item={item} index={index} URL={URL} />
        })}
        </ul>
    )
}

export default ArtList