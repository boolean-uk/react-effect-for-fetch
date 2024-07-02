import React, { useEffect, useState } from "react";
import ArtList from "./ArtList";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check if data is being fetched
        setArtworks(data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList artworks={artworks} />
    </section>
  );
}

export default ArtsSection;
