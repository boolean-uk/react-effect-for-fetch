import { useState, useEffect } from "react";
import { ArtList } from "./components/ArtList.jsx";
function ArtsSection() {

  const [art, setArt] = useState()
  const address = 'https://boolean-api-server.fly.dev'

  useEffect(() => {
    const fetchData = async () => {
      await fetch(address + '/art')
        .then(res => res.json())
        .then(res => setArt(res))
    }
    fetchData()
  }, [])

  if (art)
  {
    return (
      <section>
        <h2>Arts Section</h2>
        <div className="scroll-container">
          <ArtList
            art={art}
            address={address}
          />
        </div>
      </section>
    )
  }
}

export default ArtsSection
