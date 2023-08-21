import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [artworks, setArtworks] = useState(null)

  async function getArtsData() {
    const LIMIT_PARAM = 5
    const FIELDS_PARAM = 'id,title,image_id,artist_display,subject_titles'
    const url = `https://api.artic.edu/api/v1/artworks?limit=${LIMIT_PARAM}&fields=${FIELDS_PARAM}`
    const response = await fetch(url)
    const json = await response.json()
    setArtworks(json.data)
  }

  useEffect(() => {
    getArtsData()
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {
          artworks && <ArtList artworks={artworks} />
        }
      </div>
    </section>
  )
}

export default ArtsSection
