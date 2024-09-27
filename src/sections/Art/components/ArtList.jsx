import ArtListItem from "./ArtListItem";
import { useState, useEffect } from "react";

function ArtList({ ART_ENDPOINT }) {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch(ART_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setArtData(data);
      });
  }, [ART_ENDPOINT]);

  return (
    <div className="scroll-container">
      <ul className="art-list">
        {artData.map((artwork, index) => (
          <ArtListItem key={index} artwork={artwork} />
        ))}
      </ul>
    </div>
  );
}
export default ArtList;
