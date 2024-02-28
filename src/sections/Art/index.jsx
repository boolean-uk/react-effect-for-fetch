import { useEffect, useState } from "react";
import { fetchData } from "/src/Utils/fetch";
import { ArtList } from "./components/ArtList";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchData("https://boolean-api-server.fly.dev/art", setArtworks)
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks} />
      </div>
    </section>
  );
}

export default ArtsSection;
