import { useEffect, useState } from "react"
import { getArt } from "../../api"
import ArtList from "./components/ArtList"

function ArtsSection() {

  const [artList, setArtList] = useState([])

  useEffect(() => {
    
    getArt()
    .then((data) => {
      setArtList(data)
    }).catch(err => console.log(err))
    }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">

      <ArtList artList={ artList } />


      </div>
    </section>
  )
}

export default ArtsSection
