import {useState, useEffect} from 'react'

function ArtsSection() {
    const [artworks, setArtworks] = useState([])

      const fetchArtData = () =>{

          fetch('https://api.artic.edu/api/v1/artworks')

          .then((response) => response.json())

          .then((data) => setArtworks(data.data))
      }


      useEffect(
        fetchArtData,
        []
      )


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul class="art-list">
        {artworks.map((artwork) =>{
          return(
            <li key={artwork.id}>
            <div class="frame">
              <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              />
            </div>
            <h3>{artwork.title}</h3>
            <p>{`Artist: ${artwork.artist_title}`}</p>
            <h4>Artistic Subjects:</h4>
            <ul>
              <li>{artwork.date_start}</li>
              <li>men</li>
              <li>portraits</li>
              <li>world's fairs</li>
              <li>{artwork.medium_display}</li>
            </ul>
          </li>

          )


        })}
        </ul>
       
      
      </div>
    </section>
  )
}







/* 
<ul class="art-list">
      <li>
        <div class="frame">
          <img
            src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg"
          />
        </div>
        <h3>Beggar with Oysters (Philosopher)</h3>
        <p>Artist: Édouard Manet</p>
        <h4>Artistic Subjects:</h4>
        <ul>
          <li>Century of Progress</li>
          <li>men</li>
          <li>portraits</li>
          <li>world's fairs</li>
          <li>Chicago World's Fairs</li>
        </ul>
      </li>
    </ul>




*/

export default ArtsSection
