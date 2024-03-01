import React from "react";
import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ art }) {
  const baseURL = "https://boolean-api-server.fly.dev/";

  return (
    <>
      <li>
        <div className="frame">
          <img src={baseURL + art.imageURL} alt={art.title} />
        </div>

        <h3>{art.title}</h3>
        <p>Artist: {art.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          {art.publicationHistory.map((item, index) => {
            return (
              <li key={index}>
                <PublicationHistoryList pubHistory={item} />
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
}

export default ArtListItem;
