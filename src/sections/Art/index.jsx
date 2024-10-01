import React, { useState, useEffect } from 'react';
import ArtListItem from './components/ArtListItem';

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then((response) => response.json())
      .then((data) => setArtworks(data))
      .catch((error) => console.error('Error fetching art data:', error));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artworks.map((artwork) => (
            <ArtListItem key={artwork.id} artwork={artwork} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;



