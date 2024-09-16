import { useState, useEffect } from "react";
import ArtListItem from "./components/ArtListItem";

function ArtsSection() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then((res) => res.json())
      .then((data) => setArts(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {arts.map((art, index) => (
            <ArtListItem key={index} art={art} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
