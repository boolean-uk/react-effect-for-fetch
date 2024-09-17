import { useState, useEffect } from "react"

import ArtList from "./components/ArtList"

function ArtsSection() {
  const [artHistoryData, setArtHistoryData] = useState([]);
  const _baseURL = "https://boolean-api-server.fly.dev"

  useEffect(() => {
    fetch(_baseURL + "/art")
    .then((response) => response.json())
    .then(setArtHistoryData)
  }, [])

  return (
    <section>
            <h2>Arts Section</h2>
            <div className="scroll-container">
                <ArtList data={artHistoryData} baseURL={_baseURL} />
            </div>
        </section>
  )
}

export default ArtsSection
