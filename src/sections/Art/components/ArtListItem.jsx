import React from "react";
import SubjectList from "./SubjectList";

const ArtListItem = ({ artPiece }) => {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${artPiece.image_id}/full/843,/0/default.jpg`}
        />
      </div>
      <h3>{artPiece.title}</h3>
      <p>Artist: {artPiece.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        <SubjectList artPiece={artPiece} />
      </ul>
    </li>
  );
};

export default ArtListItem;
