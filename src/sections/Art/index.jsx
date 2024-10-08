import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(resp => resp.json())
      .then(data => setInfo(data))
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={info}/>
      </div>
    </section>
  )
}

export default ArtsSection
