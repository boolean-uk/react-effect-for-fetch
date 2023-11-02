import { useState, useEffect } from 'react'
import ArtListItem from './components/ArtListItem'

function ArtsSection() {

  const [artData, setArtData] = useState([])

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setArtData(data.data)
        console.log(data)
      })
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">{artData.map((artItem) => {
        return (
          <ArtListItem 
          title={artItem.title}
          artist_title={artItem.artist_title}
          />
        )
      })}
      </div>
    </section>
  )
}

export default ArtsSection


