import { useState, useEffect } from 'react'

function ArtsSection() {
  const [art, setArt] = useState([])
 

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`)
    .then(response => response.json())
    .then(setArt)
    }, [])

   

  //console.log(art)
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map((artwork, index) => (
            <li key={index}>
              <div className="frame">
                <img
                  src={`https://boolean-api-server.fly.dev${artwork.imageURL}`}
                  alt={artwork.title}
                />
              </div>
              <h3>{artwork.title}</h3>
              <p>{artwork.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {artwork.publicationHistory.map((historyItem, idx) => (
                  <li key={idx}>{historyItem}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>

  )
}

export default ArtsSection
