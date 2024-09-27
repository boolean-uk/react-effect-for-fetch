import React from "react";
import { Art } from "../../interfaces/interface";

interface ArtListItemProps {
  artItem: Art
}

const ArtListItem = ({ artItem }: ArtListItemProps) => {
  const baseURL = 'https://boolean-uk-api-server.fly.dev';

    return (
        <li>
        <div className="frame">
          <img src={baseURL + artItem.imageURL} />
        </div>
        <h3>{artItem.title}</h3>
        <p>{artItem.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          {artItem.publicationHistory.map((historyItem) => (
            <li key={historyItem}>{historyItem}</li>
          ))}
        </ul>
      </li>
    );
}

export default ArtListItem;