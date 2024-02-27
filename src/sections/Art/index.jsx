import "../../App.css";
import { useState, useEffect } from "react";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => {
        setArtworks(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <section>
        <h2>Arts Section</h2>
        <div className="scroll-container">
          <ul className="art-list">
            {artworks.map((artwork) => {
              return (
                <li key={artwork.id}>
                  <img
                    src={
                      `https://boolean-api-server.fly.dev/` + artwork.imageURL
                    }
                    alt={artwork.title}
                  />
                  <br />
                  The artist&apos;s name: {artwork.artist} <br />
                  The title of the artwork: {artwork.title}
                  <br />
                  The complete publication history: <br />
                  <ul>
                    {artwork.publicationHistory.map((publicationHistory) => {
                      return (
                        <li key={publicationHistory}>{publicationHistory}</li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ArtsSection;
