import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";

export default function ArtList() {
  const [art, setArt] = useState([]);
  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);

  return (
    <ul className="art-list">
      {art.map((art) => (
        <ArtListItem key={art.id} art={art} />
      ))}
    </ul>
  );
}
