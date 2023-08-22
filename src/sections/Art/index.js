import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";



function ArtsSection() {
  const [artic, setArtic] = useState([]);

  useEffect(() => {
    async function getArtData() {
      const response = await fetch("https://api.artic.edu/api/v1/artworks");
      const artData = await response.json();
      setArtic(artData.data);
    }
    getArtData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">

        <ArtList artic={artic}/>
       
      </div>
    </section>
  );
}

export default ArtsSection;