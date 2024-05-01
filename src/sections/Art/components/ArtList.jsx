import { useState, useEffect } from "react";
import ArtListItem from "./ArtListItem";

export default function ArtList() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((response) => response.json())
      .then(setArtData);
  }, []);

  return (
    <ul className="art-list">
      {artData.map((item) => {
        return <ArtListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
