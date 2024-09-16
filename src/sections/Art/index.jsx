import { useState, useEffect } from 'react'
import ArtList from "./components/ArtList"

function ArtsSection({baseUrl}) {
  const [artList, setArtList] = useState()


  const retrieveArtData = async () => {
    await fetch(baseUrl+"art")
      .then((res) => res.json())
      .then((res) => setArtList(res))
  }

  useEffect(() => {
    retrieveArtData()
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList list={artList} baseURL={baseUrl}/>
      </div>
    </section>
  )
}

export default ArtsSection
