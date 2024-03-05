import { useState, useEffect } from "react"
import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem() {
  const [art, setArts] = useState([])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((response) => response.json())
      .then((data) => setArts(data))
  }, [])

  return (
    <section>
      <ul className="art-list">
        {art.map((art) => (
        <li key={art.id}>
          <div className="frame">
            <img
              src={`https://boolean-api-server.fly.dev${art.imageURL}`}
              alt={art.title}
            />
          </div>
          <div className="art-details">
            <h1>{art.title}</h1>
            <p>Artist: {art.artist}</p>
            <h3>Publication History:</h3>
            <ul>
              <PublicationHistoryList pubList={art.publicationHistory} />
            </ul>
          </div>
        </li>
      ))}
      </ul>
    </section>
  )
}
