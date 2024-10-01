import { useEffect, useState } from "react";
import ArtsList from "./components/ArtList";

function ArtsSection() {
  const [art, setArt] = useState([]);

  useEffect(() => {

      const fetchArtData = async () => {
        const response = await fetch("https://boolean-uk-api-server.fly.dev/art")

        if (!response.ok) {
          throw new Error("Failed to fetch data!")
        }

        const data = await response.json()
        setArt(data)
      }
      fetchArtData()

  }, [])

  console.log(JSON.stringify(art, null, 2))

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtsList artList={art} />
      </div>
    </section>
  )
}

export default ArtsSection
