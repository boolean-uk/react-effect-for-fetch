import { useEffect, useState} from 'react'
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artworks, setArtworks] = useState([])
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
    .then((response) => response.json())
    .then((data) => setArtworks(data))
    .catch((err) => console.error('ERROR! Could not fetch from url!', err))
  }, [])


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks} />
      </div>
    </section>
  )
}

export default ArtsSection
