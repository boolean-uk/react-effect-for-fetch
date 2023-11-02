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
      .then(data =>{
        // console.log(data.data)
        // console.log(data.config)
        // console.log(data)
        setArtworks(data.data)
      })
  }
}, [dataType])

console.log(artworks)

// const imgIIIF = "https://www.artic.edu/iiif/2"

// fetch(`${imgIIIF}/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg`)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="scroll-container">
      {artworks.map((artwork, index) => 
       <li key={`${artwork.title}-${index}`}>
       <div className="frame">
         <img
           src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg"
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
