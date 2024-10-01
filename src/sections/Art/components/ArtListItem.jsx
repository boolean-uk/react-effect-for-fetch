import React from 'react';

function ArtListItem({ artwork }) {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-uk-api-server.fly.dev${artwork.imageURL}`} alt={artwork.title} />
      </div>
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {artwork.publicationHistory.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;

