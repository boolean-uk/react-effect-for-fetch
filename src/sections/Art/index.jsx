import { useState } from "react"
import { useEffect } from "react"
import ArtList from "./components/ArtList.jsx"

const URL = "https://boolean-api-server.fly.dev/art"

function ArtsSection() {
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(setArts)
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container"><ArtList URL={URL} arts={arts} /></div>
    </section>
  )
}
export default ArtsSection