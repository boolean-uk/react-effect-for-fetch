import React, { useEffect, useState } from 'react';

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => response.json())
      .then(data => setArtworks(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artworks.map(artwork => (
            <li key={artwork.id}>
              <div className="frame">
                <img src={`https://boolean-uk-api-server.fly.dev${artwork.imageURL}`} alt={artwork.title} />
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
      </div>
    </section>
  );
}

export default ArtsSection;
