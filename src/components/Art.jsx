import { useState, useEffect } from "react";

export default function ArtsSection() {
  const [artworks, setArtwork] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => {
        setArtwork(data);
      })
      .catch((error) => {
        console.error("Error fetching arts:", error);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artworks && (
          <ul className="art-list">
            {artworks.map((artwork, i) => (
              <li key={i}>
                <div className="frame">
                  <img
                    src={`https://boolean-api-server.fly.dev${artwork.imageURL}`}
                    alt="Artwork"
                  />
                </div>
                <h3>{artwork.title}</h3>
                <p>Artist: {artwork.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                  {artwork.publicationHistory.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
