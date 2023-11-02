import { useState, useEffect } from "react"
import Subjects from "./components/Subjects"

function ArtsSection(props) {
// const [data, setData] = useState(null)
// const {artsData} = props

const [artsData, setArtsData] = useState([])

useEffect(() => {
  fetch('https://api.artic.edu/api/v1/artworks')
  .then(res => res.json())
  .then(data => {
    setArtsData(data.data)
    console.log(data)
  }) 
}, [])


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artsData.map((artData, idx) => (
            <li key={idx}>
              <div className="frame">
                <img src={artData.image_id ? `https://www.artic.edu/iiif/2/${artData.image_id}/full/843,/0/default.jpg` : "https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg"} alt="" />
              </div>
              <h3>{artData.title}</h3>
              <p>Artist: {artData.artist_title}</p>
              <h4>Artist Subjects:</h4>
              <ul>
                <Subjects artData={artData} />
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
