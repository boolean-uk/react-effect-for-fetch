import { useEffect, useState } from "react";
import { ArtList } from "./components/ArtList";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://boolean-api-server.fly.dev/art");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setArtworks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
