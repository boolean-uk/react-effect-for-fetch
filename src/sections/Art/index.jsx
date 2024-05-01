import { useState } from "react"
import { useEffect } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [arts, setArts] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(res => res.json())
      .then(setArts)
  }, [])
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {arts.map(art => 
          <ArtList key={art.id} art={art} />
        )}
      </div>
    </section>
  )
}

export default ArtsSection
