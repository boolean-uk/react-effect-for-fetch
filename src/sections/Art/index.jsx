import { useEffect, useState } from "react"
import ArtListComponent from "./components/ArtList"

function ArtsSection() {
  const [artListData, setArtListData] = useState([]);
  const baseURL = "https://boolean-api-server.fly.dev"

  useEffect(() => {
    fetch(baseURL + "/art")
    .then((res) => res.json())
    .then(setArtListData)
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtListComponent artListData={artListData} baseURL={baseURL} />
      </div>
    </section>
  )
}

export default ArtsSection
