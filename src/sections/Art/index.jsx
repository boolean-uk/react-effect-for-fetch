import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

const baseURL = "https://boolean-api-server.fly.dev"

function ArtsSection() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(baseURL + "/art")
      .then((response) => response.json())
      .then(setData)
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>

      <div className="scroll-container">
        <ArtList data={data} />
      </div>
    </section>
  )
}

export default ArtsSection
