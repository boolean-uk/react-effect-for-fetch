import React from "react";
import ArtListItem from "./ArtListItem";

function ArtList({ artworks }) {
  return (
    <div className="scroll-container">
      <ul className="art-list">
        {artworks.map((artwork) => (
          <ArtListItem
            key={artwork.id}
            image={`https://boolean-uk-api-server.fly.dev${artwork.imageURL}`}
            title={artwork.title}
            artist={artwork.artist}
            publicationHistory={artwork.publicationHistory}
          />
        ))}
      </ul>
    </div>
  );
}

export default ArtList;
