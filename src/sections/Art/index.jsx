import { useEffect, useState } from "react";
import ArtList from "./components/ArtList.jsx";

const BASE = "https://boolean-uk-api-server.fly.dev";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch(`${BASE}/art`)
      .then((response) => response.json())
      .then((data) => {
        const artworksWithData = data.map((art) => {
          return {
            id: art.id,
            title: art.title,
            artist: art.artist,
            imageUrl: `${BASE}${art.imageURL}`,
            publicationHistoryList: art.publicationHistory || [],
          };
        });
        setArtworks(artworksWithData);
      });
  }, []);

  return (
    <section>
      <h2>Art Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks} />
      </div>
    </section>
  );
}

export default ArtsSection;
