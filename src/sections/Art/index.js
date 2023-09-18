import { useEffect, useState } from "react"
import Artlist from "./components/ArtList"

function ArtsSection() {

  const [artList, setArtList] = useState([]) 
console.log(artList)
  
  async function getArtwork() {
    const retrieveArt = await fetch('https://api.artic.edu/api/v1/artworks')
    const art= await retrieveArt.json()
    setArtList(art.data)
    console.log("getting artwork", art)
  }

  console.log(artList)

  useEffect(() => {
    getArtwork()
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container"></div>
      < Artlist data ={artList}/>
    
    </section>
  )
}

export default ArtsSection

