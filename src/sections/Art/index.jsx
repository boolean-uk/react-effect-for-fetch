import { useState } from "react"
import { useEffect } from "react"

function ArtsSection() {
  const [arts, setArts] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(res => res.json())
      .then(setArts)
  }, [])
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {arts.map(art => 
          <ul key={art.id} className="art-list">
            <li>
              <div className="frame">
                <img
                  src={`https://boolean-api-server.fly.dev${art.imageURL}`}
                />
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                <li>{art.publicationHistory[0]}</li>
                <li>{art.publicationHistory[1]}</li>
                <li>{art.publicationHistory[2]}</li>
              </ul>
            </li>
          </ul>
        )}
      </div>
    </section>
  )
}

export default ArtsSection
