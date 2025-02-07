import { useState } from "react"
import ArtList from "./components/ArtList"
import { useEffect } from "react"

function ArtsSection() {

  const [artworkList, setArtworkList] = useState(null)

  const baseURL = "https://boolean-uk-api-server.fly.dev/"

  useEffect(() => {
      fetch(baseURL + "art")
      .then(res => res.json())
      .then(data => setArtworkList(data))
  }, [])

  console.log(artworkList)
  
  console.log(baseURL + "art")

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artworkList && <ArtList artworkList={artworkList} baseURL={baseURL} />}
      </div>
    </section>
  )
}

export default ArtsSection
