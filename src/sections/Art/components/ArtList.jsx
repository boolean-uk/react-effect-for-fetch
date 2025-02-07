import React from "react";
import ArtListItem from "./ArtListItem";


function ArtList({artData}) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artData.map((art) => (
          <ArtListItem key={art.id} art={art} />
        ))}
      </div>
    </section>
  );
}

export default ArtList;