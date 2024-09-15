import { useEffect, useState } from 'react'

function ArtsSection() {
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/art')
      .then(resp => resp.json())
      .then(data => setArts(data))
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
        {arts.map((art, index) => <li key={index}>
            <div className="frame">
              <img
                src={`https://boolean-api-server.fly.dev/${art.imageURL}`}
              />
            </div>
            <h3>{art.title}</h3>
            <p>{art.artist}</p>
            <h4>Publication History:</h4>
            <ul>
              {art.publicationHistory}
            </ul>
          </li>)}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
