import { useEffect, useState } from "react";

import ArtList from "./components/ArtList";

const BASE_URL = "https://api.artic.edu/api/v1/artworks";
const ART_FIELDS_QUERY = `fields=${["title", "id", "image_id", "artist_title", "subject_titles"]}`
const RANDOM_PAGE = `page=${Math.floor(Math.random() * 10000)}`

function ArtsSection() {
  const [artData, setArtData] = useState([]);
  const [artConfig, setArtConfig] = useState({});

  function obtainArtData() {
    fetch(`${BASE_URL}?${ART_FIELDS_QUERY}&${RANDOM_PAGE}`)
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
        <ArtList artData={artData} artConfig={artConfig}></ArtList>
      </div>
    </section>
  );
}

export default ArtsSection;