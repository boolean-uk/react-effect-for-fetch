import ArtList from './components/ArtList'
import { useState, useEffect } from 'react'

function ArtsSection() {

  const url = "https://boolean-api-server.fly.dev/art"

    const [data, setData]  = useState([])

    useEffect(() => {
      fetch(`${url}`)
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
