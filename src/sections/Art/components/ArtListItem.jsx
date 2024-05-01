import React from "react";

function ArtListItem({ art }) {
  const baseURL = "https://boolean-api-server.fly.dev/";

  // Function to render publication history items
  const renderPublicationHistory = () => {
    return art.publicationHistory.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  };

  return (
    <li>
      <div className="frame">
        <img src={baseURL + art.imageURL} alt={art.title} />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {renderPublicationHistory()}
      </ul>
    </li>
  );
}

export default ArtListItem;
