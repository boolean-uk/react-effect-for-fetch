import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [art, setArt] = useState([]);

  const fetchArt = () => {
    fetch("https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_title,subject_titles")
      .then((Response) => Response.json())
      .then((data) => setArt(data.data));
  };
  useEffect(fetchArt, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ArtList art={art}/>
      </div>
    </section>
  )}

export default ArtsSection;