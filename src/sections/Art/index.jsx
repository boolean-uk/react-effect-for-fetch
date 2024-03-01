import { useState, useEffect } from "react";

export default function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((response) => response.json())
      .then((data) => setArtworks(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <ul className="art-list">
        {artworks.map((artwork) => (
          <li key={artwork.id}>
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
              {artwork.publicationHistory.map((publication, index) => (
                <li key={index}>{publication}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="scroll-container"></div>
    </section>
  );
}
