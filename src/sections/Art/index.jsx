import ArtList from "./components/ArtList";
import { useState, useEffect } from "react";

const API_URL = 'https://boolean-api-server.fly.dev/art';

function ArtsSection() {
  const [art, setArtList] = useState([]);

  useEffect(() => {
      fetch(API_URL)
          .then(res => res.json())
          .then(data => {
            if (data) {
              setArtList(data)
            }
          });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList art={art}/>
      </div>
    </section>
  );
}

export default ArtsSection;
