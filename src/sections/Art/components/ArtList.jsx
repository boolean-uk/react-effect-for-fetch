import React from 'react';
import ArtListItem from './ArtListItem';

function ArtList({ artList }) {
  // Check if artList is empty or null
  if (!artList || artList.length === 0) {
    return <p>No artworks found.</p>;
  }

  return (
    <ul className="art-list">
      {artList.map((artwork, index) => (
        <ArtListItem key={index} art={artwork} />
      ))}
    </ul>
  );
}

export default ArtList;
