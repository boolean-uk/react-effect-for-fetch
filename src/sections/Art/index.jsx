import { useState, useEffect } from 'react';
import ArtList from './components/ArtList';

function ArtsSection() {
  const [artData, setArtData] = useState([])
  const baseURL = 'https://boolean-api-server.fly.dev'
  
  useEffect(() => {
    fetch(`${baseURL}/art`)
    .then(res => res.json())
    .then(setArtData)
  }, [])

  //console.log(artData)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artData={artData} baseURL={baseURL}/>
      </div>
    </section>
  )
}

export default ArtsSection
