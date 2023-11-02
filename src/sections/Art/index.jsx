import { useEffect, useState } from "react"
function ArtsSection() {

  const [art, setArt] = useState([])

  const getArt = () => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then(res => res.json())
      .then(data => {
        const filteredData = data.data.filter((art) => art.image_id)
        console.log(filteredData)
        setArt(filteredData)
      })
  }

  useEffect(getArt, [])



    
const artwork = art.map((artPiece, index) => (
          <li key={index}>
            <div className="frame">
              <img
                src={`https://www.artic.edu/iiif/2/${artPiece.image_id}/full/843,/0/default.jpg`}
              />
            </div>
            <h3>{artPiece.title}</h3>
            <p>Artist: {artPiece.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <ul>
              {artPiece.subject_titles.map((titles) => {
                <li>{titles}</li>
              })}
            </ul>
          </li>
   ))



return (
  <section>
    <h2>Arts Section</h2>
    <div className="scroll-container">
      <ul className="art-list">
        {artwork}
      </ul>
    </div>
  </section>
)
}

export default ArtsSection
