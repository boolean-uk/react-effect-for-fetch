import { useEffect, useState } from "react";

import ArtList from "./components/ArtList";

const BASE_URL = "https://api.artic.edu/api/v1/artworks";
const ART_FIELDS_QUERY = `fields=${["title", "id", "artist_title", "subject_titles"]}`

function ArtsSection() {
  const [artData, setArtData] = useState([]);
  const [artConfig, setArtConfig] = useState({});

  function obtainArtData() {
    fetch(`${BASE_URL}?${ART_FIELDS_QUERY}`)
      .then((response) => response.json())
      .then((result) => {
        setArtData(result.data);
        setArtConfig(result.config)
      });
  }

  useEffect(obtainArtData, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artData={artData}></ArtList>
      </div>
    </section>
  );
}

export default ArtsSection;
