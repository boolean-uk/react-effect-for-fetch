import { useEffect, useState } from "react";

import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artData, setArtData] = useState({ data: [] });

  async function getArtData() {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?fields=image_id,title,id,artist_title,subject_titles&limit=10"
    );
    const json = await response.json();
    setArtData(json);
  }

  useEffect(() => {
    getArtData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artData={artData} />
      </div>
    </section>
  );
}

export default ArtsSection;
