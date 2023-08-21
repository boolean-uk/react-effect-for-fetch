import { useEffect, useState } from "react"
import ArtList from './components/ArtList'

const ArtsSection = () => {
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
  fetch(`https://api.artic.edu/api/v1/artworks`)
  .then(response => response.json())
  .then(data => {
    setArtworks(data.data)
  })
  }, [])
  
  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList artworks={artworks} />
    </section> 
    )
  }

export default ArtsSection
