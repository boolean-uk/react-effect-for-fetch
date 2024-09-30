import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {

  const [artData, setArtData] = useState()

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/art')
      const data = await response.json()
      setArtData(data)
    }

    fetchData()
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {artData && 
          <>
            <ArtList data={artData} /> 
          </>
        }
      </div>
    </section>
  )
}

export default ArtsSection
