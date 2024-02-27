import { useState, useEffect } from "react";

function ArtsSection({ imageURLs, ART_ENDPOINT }) {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch(ART_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setArtData(data);
      });
  }, [ART_ENDPOINT]);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artData.map((artwork, index) => (
            <li key={index}>
              <div className="frame">
                <img
                  src={"https://boolean-api-server.fly.dev" + artwork.imageURL}
                  alt={artwork.title}
                />
              </div>
              <h3>{artwork.title}</h3>
              <p>Artist: {artwork.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {artwork.publicationHistory.map((history, idx) => (
                  <li key={idx}>{history}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
