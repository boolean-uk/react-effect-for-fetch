import { useState, useEffect } from 'react'

function ArtsSection() {
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
      .then(response => response.json())
      .then(setArtworks)
  }, [])

  console.log(artworks)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artworks.length !== 0 && 
          artworks.map((art, index) => 
            (<li key={index}>
              <div className="frame">
                <img src={`https://boolean-api-server.fly.dev/${art.imageURL}`} />
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication history:</h4>
              {art.publicationHistory.map((publication, index) => (
                <li key={index}>
                  {publication}
                </li>
              ))}
            </li>)
          )}
        </ul>
      </div>

    </section>
  )
}

export default ArtsSection
