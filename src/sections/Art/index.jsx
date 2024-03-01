import { useEffect, useState } from 'react'
import ArtList from './components/ArtList'


const apiUrl = 'https://boolean-api-server.fly.dev'

function ArtsSection() {
  const [artList, setArtList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/art`)
      .then((response) => response.json())
      .then((data) => setArtList(data))
  }, [])

  return (
    <section>
      <h1>Arts Section</h1>
      <div className="scroll-container">
        <ArtList artList={artList} apiUrl={apiUrl} />
      </div>
    </section>
  )
}

export default ArtsSection