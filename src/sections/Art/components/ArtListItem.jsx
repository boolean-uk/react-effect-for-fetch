import { useEffect, useState } from "react";
import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => setArtworks(data));
  }, []);

  return (
    <>
      {artworks.map((artwork, index) => (
        <li key={index}>
          <div className="frame">
            <img
              src={`https://boolean-api-server.fly.dev${artwork.imageURL}`}
              alt={artwork.title}
            />
          </div>
          <h3>{artwork.title}</h3>
          <p>Artist: {artwork.artist}</p>
          <h4>Publication History:</h4>
          <ul>
            <PublicationHistoryList pubHistoryList={artwork.publicationHistory} />
          </ul>
        </li>
      ))}
    </>
  );
}

export default ArtListItem;
