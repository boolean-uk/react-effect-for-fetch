import React from 'react';
import PublicationHistoryList from './PublicationHistoryList';

// ArtListItem component to render individual art items
const ArtListItem = ({ imageUrl, title, artist, publicationHistory }) => {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${imageUrl}`} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList publicationHistory={publicationHistory} />
    </li>
  );
};

export default ArtListItem;
