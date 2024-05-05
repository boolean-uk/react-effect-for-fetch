import React from "react"
import ArtListItem from "./components/ArtListItem"
import { ArtList } from "./components/ArtList"

function ArtsSection() {
  const[artList, setArtList]= React.useState([])

  async function fetchApiData() {

    const response = await fetch('https://boolean-uk-api-server.fly.dev/art')
    const data = await response.json()
    console.log(data)

    setArtList(data)
  }

  React.useEffect(() => {fetchApiData()}, [])
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList>
          {artList.map((item) => {return (<ArtListItem art={item}/>)})}
        </ArtList>
      </div>
    </section>
  )
}

export default ArtsSection
