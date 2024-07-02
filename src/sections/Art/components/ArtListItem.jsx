import React from "react";

function ArtListItem({ image, title, artist, publicationHistory }) {
  return (
    <li>
      <div className="frame">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {publicationHistory.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
