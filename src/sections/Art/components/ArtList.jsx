import { useState, useEffect } from "react";
import ArtListItem from "./ArtListItem";
function ArtList() {
  const [art, setArt] = useState([]);

  console.log({ art });

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((response) => response.json())
      .then((item) => setArt(item));
  }, []);
  return (
    <ul className="art-list">
      {art.map((item, index) => (
        <ArtListItem item={item} key={index} />
      ))}
    </ul>
  );
}
export default ArtList;
