import { useState, useEffect } from 'react'
import ArtList from './components/ArtList'

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
      <div className="scroll-container">
        {artData.map((artItem) => {
          return (
            <ArtList 
              key={artItem.id}
              title={artItem.title}
              imageUrl={artItem.image_id}
              artist={artItem.artist_title}
              classification={artItem.classification_title}
              date={artItem.date_display}
              medium={artItem.medium_display}
              place={artItem.place_of_origin}
            />
          )
        })}
        </div>
        </section>
        )
        }

export default ArtsSection


