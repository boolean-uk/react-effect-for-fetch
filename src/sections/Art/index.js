import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {

  const [artworks, setArtworks] = useState([])

  async function getImage(){
    const response = await fetch('https://api.artic.edu/api/v1/artworks?fields=image_id,title,id,artist_title,subject_titles')
    const json = await response.json()
    setArtworks(json.data)
  }

  useEffect(() => {
    getImage()
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks}/>
      </div>
    </section>
  )
}

export default ArtsSection
