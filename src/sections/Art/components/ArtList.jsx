import ArtListItem from "./ArtListItem"
import { useState, useEffect} from "react"

export default function ArtList () {
    const [art, setArt] = useState([])

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/art`)
          .then((response) => response.json())
          .then((item) => setArt(item))
      }, [])

    return(
        <ul className="art-list">
            {art.map((arts, index) =>
            <ArtListItem
                key={index}
                title={arts.title}
                artist={arts.artist}
                imageURL={arts.imageURL}
                publicationHistory={arts.publicationHistory}
            />
            )
            }
        </ul>
    )
}
