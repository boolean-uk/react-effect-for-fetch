import { useState, useEffect } from "react";
import ArtListItem from "./ArtListItem";

const ArtList = () => {
  const [Theart, setTheArt] = useState([]);

  const getTheArt = () => {
    fetch("https://api.artic.edu/api/v1/artworks?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const filterTheData = data.data.filter((Theart) => Theart.image_id);

        setTheArt(filterTheData);
      });
  };

  useEffect(getTheArt, []);

  return Theart.map((artPiece, index) => (
    <ArtListItem artPiece={artPiece} key={index} Theart={Theart} />
  ));
};

export default ArtList;