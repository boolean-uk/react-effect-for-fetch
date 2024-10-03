import { useState, useEffect } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art"
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const artResponse = await fetch(url);
      const jsonArt = await artResponse.json();
      setArtworks(jsonArt);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks = {artworks}/>
      </div>
    </section>
  )
}

export default ArtsSection
