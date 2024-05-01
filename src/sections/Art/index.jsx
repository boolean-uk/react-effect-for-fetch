import ArtList from './components/ArtList'
import { useState, useEffect } from 'react'

function ArtsSection() {

const [artists, setArtists] = useState([])

useEffect(() => {
  const getData = async () => {
    const data = await fetch('https://boolean-uk-api-server.fly.dev/art')
    const json = await data.json()
    setArtists(json)
  }
  getData()
}, [])



  return (
    <section>
    <h2>Arts Section</h2>
    <div className="scroll-container">
      <ArtList artists={artists}/>
    </div>
  </section>
  
  )
}

export default ArtsSection
