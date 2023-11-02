import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artworkList, setArtworkList] = useState([]);

  const fetchArtworks = () => {
    fetch(
      "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,image_id,subject_titles"
    )
      .then((res) => res.json())
      .then((data) => setArtworkList(data.data));
  };

  useEffect(fetchArtworks, []);
  console.log(artworkList);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworkList={artworkList} />
      </div>
    </section>
  );
}

export default ArtsSection;
