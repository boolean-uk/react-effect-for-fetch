import { useEffect, useState } from "react"
// import ArtListItem from 
import ArtListItem from "./ArtListItem";



function ArtList(){
    const [artResponse, setArtResponse] = useState([])

    useEffect(() => {
        fetch("https://boolean-uk-api-server.fly.dev/art")
        .then(res => res.json())
        .then(setArtResponse)
    
        console.log(artResponse);
    }, []) // note to self: very important with dependency arrays!!!
    
    return (
        <div>
          <h1>Art List</h1>
          <ul>
             {artResponse.map((art) => (
                <ArtListItem key={art.id} artItem={art}/>
             ))}
          </ul>
        </div>
      )
}

export default ArtList