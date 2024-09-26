import { useState, useEffect } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [artData, setArtData] = useState([])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then(res => res.json())
      .then(art => setArtData(art))
    }, [])

    useEffect(() => {
      console.log(artData)
      }, [artData])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList props={artData} />
      </div>
    </section>
  )
}

export default ArtsSection
