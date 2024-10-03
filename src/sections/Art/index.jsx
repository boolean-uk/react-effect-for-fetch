import ArtList from "./components/ArtList"
import { useEffect, useState } from "react"

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then((response) => response.json())
      .then((data) => setArtworks(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks} />
      </div>
    </section>
  )
}

export default ArtsSection
