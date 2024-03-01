import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
    .then(res => res.json())
    .then(data => setArts(data))
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList arts={arts} />
      </div>
    </section>
  )
}

export default ArtsSection
