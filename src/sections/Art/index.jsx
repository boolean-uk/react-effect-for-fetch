import { useEffect, useState } from "react"

function ArtsSection() {
  const [artData, setArtData] = useState([])
    async function artWorks(){

    const response = await fetch('https://api.artic.edu/api/v1/artworks')
    const json = await response.json()
    setArtData(json.data)
  }
  useEffect(()=>{
    artWorks()
  },[] )
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
        {
          artData.map((artwork)=> {
            
            return <li>
            <div class="frame">
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              />
            </div>
            
            <h3>{artwork.title} </h3>
            <p>Artist: {artwork.artist_title}</p>
            <h4>Artistic Subjects:</h4>
            <ul> 
              {artwork.subject_titles.map((title)=> {
              return <li>{title} </li>
            })}
            </ul>
          </li>
          })
        }
        </ul>     
      </div>
    </section>
  )
}

export default ArtsSection