import { useState, useEffect } from 'react'
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then(response => response.json())
      .then(setArtworks)
  }, [])

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
