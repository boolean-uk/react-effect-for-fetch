import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

const baseURL = 

function ArtsSection() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
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
