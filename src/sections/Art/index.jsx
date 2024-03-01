import ArtList from "./components/ArtList"
import { useState } from "react"
import { useEffect } from "react";

const baseUrl = 'https://boolean-api-server.fly.dev';

function ArtsSection() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/art`)
      .then((response) => response.json())
      .then((data) => setArts(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {arts && <ArtList arts={arts} />}
      </div>
    </section>
  )
}

export default ArtsSection

