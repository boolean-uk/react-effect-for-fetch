import { useState, useEffect } from "react"
import ArtList from "./components/ArtList"
function ArtsSection() {
  const [artData, setArtData] = useState([])

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art").then(Response => {
    if(Response.ok){
      return Response.json()
    }
    throw Response

  }).then(data => {
    setArtData(data)
  }).catch(error => {
    console.error("Error fetching data: ", error)
  })
}, [])
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
          <ArtList data={artData}/>
      </div>
    </section>
  )
}

export default ArtsSection
