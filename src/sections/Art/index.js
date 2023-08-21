import React, { useEffect, useState } from 'react'
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artData, setArtData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = 'https://api.artic.edu/api/v1/artworks';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setArtData(data.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section>
      <h2>Art Section</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ArtList artData={artData} />
      )}
    </section>
  );
}

export default ArtsSection;