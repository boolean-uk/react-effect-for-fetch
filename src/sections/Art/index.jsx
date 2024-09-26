import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchArts = async () => {
      const response = await fetch("https://boolean-api-server.fly.dev/art");
      const json = await response.json();
      setArts(json);
    };
    fetchArts();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList arts={arts} />
      </div>
    </section>
  );
}

export default ArtsSection;
