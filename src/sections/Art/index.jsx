import React, { useState, useEffect } from 'react';
import ArtList from './components/ArtList';

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = () => {
    fetch('https://boolean-api-server.fly.dev/art')
      .then(response => response.json())
      .then(data => setArtworks(data))
      .catch(error => console.error('Error fetching artworks:', error));
  };

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks} />
      </div>
    </section>
  );
}

export default ArtsSection;
