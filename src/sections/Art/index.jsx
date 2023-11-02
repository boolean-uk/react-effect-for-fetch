import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  // Coding
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((res) => {
        setArtList(res.data);
        // console.log(res.data);
      });
  };

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artList} />
      </div>
    </section>
  );
}

export default ArtsSection;
