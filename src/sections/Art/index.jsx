import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => setArtworks(data));
  }, []);

  return <ArtList artworks={artworks} />;
}

export default ArtSection;
