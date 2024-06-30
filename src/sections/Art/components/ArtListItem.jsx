import React from "react";
import PublicationHistoryList from "./PublicationHistoryList";

const ArtListItem = ({ art }) => {
  const imageUrl = `https://boolean-uk-api-server.fly.dev/images/${art.imageURL}`;
  console.log(`Image URL for ${art.title}: ${imageUrl}`);

  return (
    <li>
      <div className="frame">
        <img
          src={imageUrl}
          alt={art.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/150";
          }}
        />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList history={art.publicationHistory} />
    </li>
  );
};

export default ArtListItem;
