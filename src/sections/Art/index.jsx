import { useEffect, useState } from "react";

import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/`;

  useEffect(() => {
    console.log("Running art useEffect");
    const fetchData = async () => {
      try {
        const req = await fetch(URL + "art");
        const res = await req.json();
        setArtData(res);
      } catch (er) {
        console.log("OBS! Something happened: ", er);
      }
    };
    fetchData();
  }, [URL]);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {/* Componenet */}
        <ArtList artData={artData} URL={URL}></ArtList>
      </div>
    </section>
  )
}

export default ArtsSection
