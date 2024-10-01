import { useState, useEffect } from "react";

import { ArtList } from "./components/ArtList"

function ArtsSection() {
  const [arts, setArts] = useState([]);

  const fetchArt = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/art`
    );
    const data = await response.json();
    setArts(data);
  }

  useEffect(() => {
    fetchArt();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={arts} />
      </div>
    </section>
  )
}

export default ArtsSection

