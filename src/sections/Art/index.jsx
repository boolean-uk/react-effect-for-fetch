import { useEffect } from "react"
import { useState } from "react"

function ArtsSection() {

const artURL = 'https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id'

const [artworks, setArtworks] = useState([])
const [dataType, setDataType] = useState('')

useEffect(() => {
  if (!dataType) {
    fetch(`${artURL}`)
      .then(res => res.json())
      .then(data => {
        setArtworks(data.data)
        console.log(data.data)
      })
  }
}, [dataType])

const imgIIIF = "https://www.artic.edu/iiif/2"
const imgURLEnd = "/full/843,/0/default.jpg"

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="scroll-container">
          {artworks.map((artwork, index) => 
            <li key={`${artwork.title}-${index}`}>
              <div className="frame">
                <img
                  src={`${imgIIIF}/${artwork.image_id}${imgURLEnd}`}
                />
              </div>
              <h3>{artwork.title}</h3>
              <p>{artwork.artist_title}</p>
              <h4>Artistic Subjects:</h4>
              <ul>
                {artwork.subject_titles.map((subject, index) => 
                <li key={`${subject}-${index}`}>{subject}</li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
