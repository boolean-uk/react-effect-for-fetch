import { useEffect, useState } from "react"

import ArtList from "./components/ArtList"

function ArtsSection() {

const artURL = 'https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id'

const [artworks, setArtworks] = useState([])
const [dataType, setDataType] = useState('')

useEffect(() => {
  if (!dataType) {
    fetch(`${artURL}`)
      .then(res => res.json())
      .then(data => setArtworks(data.data))
  }
}, [dataType])

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
