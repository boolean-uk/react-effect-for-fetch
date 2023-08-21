import React from 'react'
import SubjectList from './SubjectList'

function ArtListItem({ artwork }) {

  return (
    <li>
      <div className="frame">
      <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
      </div>
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist_titles}</p>
      <h4>Artistic Subjects:</h4>
      <SubjectList subjects={artwork.subject_titles} />
    </li>
  );
}

export default ArtListItem;