import { useEffect, useState } from "react";
import ArtList from "./components/ArtList"

const ROOT_URL =  "https://api.artic.edu/api/v1/artworks"

function ArtsSection() {
  const [art, setArt] = useState([]);

  const fetchData = () => {
    fetch(ROOT_URL)
      .then(res => res.json())
      .then(data => setArt(data))
  };

  useEffect(fetchData, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
       <ArtList art={art.data} config={art.config} />
      </div>
    </section>
  )
}

export default ArtsSection
