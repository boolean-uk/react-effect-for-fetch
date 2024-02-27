import { useState } from "react";
import { useEffect } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artData, setArtData] = useState("");

  function fetchArt() {
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("ArtData set to:", data);
        setArtData(data);
      });
  }

  useEffect(() => fetchArt(), []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artData && <ArtList artData={artData} />}
      </div>
    </section>
  );
}

export default ArtsSection;
