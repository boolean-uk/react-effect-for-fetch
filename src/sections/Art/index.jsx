import { useEffect, useState } from "react"

function ArtsSection() {
  const [artWork, setArtWork] = useState([])

  useEffect(()=> {
    fetch("https://boolean-uk-api-server.fly.dev/art")
    .then(res => res.json())
    .then(setArtWork)
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artWork.map((art, index) => (
            <li key={index}>
              <div className="frame">
                <img
                  src= {`https://boolean-uk-api-server.fly.dev${art.imageURL}`}
                />
              </div>

        <h3>{art.title}</h3>
        <p>{art.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          {art.publicationHistory.map((publication, index)=> (
            <li key={index}>{publication}</li>
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
