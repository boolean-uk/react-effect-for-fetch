import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";

const ArtList = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/art");
      const data = await response.json();
      setArtworks(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Art List</h1>
      <ul>
        {artworks.map((art) => (
          <ArtListItem key={art.id} art={art} />
        ))}
      </ul>
    </div>
  );
};

export default ArtList;
