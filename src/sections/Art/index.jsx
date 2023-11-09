import ArtList from "./components/ArtList";
import { useState, useEffect } from "react";
function ArtsSection() {
  const [artList, setArtList] = useState([]);

  const GETData = () => {
    fetch(
      `https://api.artic.edu/api/v1/artworks
      `
    )
      .then((res) => res.json())
      .then((data) => {
        setArtList(data.data);
        // console.log(artList);
      });
  };
  useEffect(GETData, []);
  // console.log(artList);
  return (
    <section>
      <h2>Arts Section</h2>
      <div className='scroll-container'>
        <ArtList artList={artList} />
      </div>
    </section>
  );
}

export default ArtsSection;
