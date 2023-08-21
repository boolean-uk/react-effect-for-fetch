import React from 'react'
import ArtListItem from './ArtListItem'

function ArtList({ artData }) {

  return (
    <ul className="art-list">
      {artData.map((artwork) => (
        <ArtListItem key={artwork.id} artwork={artwork} />
      ))}
    </ul>
  );
}

export default ArtList;