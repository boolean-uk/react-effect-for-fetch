import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {

  const [artList,setArtList] = useState([1,2])

  async function getArtList() {
    const response = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,thumbnail,image_id,subject_titles')
    const json = await response.json()
    setArtList(json.data)
  }

  useEffect(() => {
    getArtList()
  },[])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artList}/>
      </div>
    </section>
  )
}

export default ArtsSection
