import { useEffect, useState } from "react"

function ArtsSection() {

  const[art, setArt] = useState([])

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => response.json())
      .then(setArt)
      return;
  }, [])

  console.log(art)

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map((painting, index) => 
          <li key={index}>
            <div className="frame">
              <img src={`https://boolean-api-server.fly.dev${painting.imageURL}`}/>
            </div>
            <h3>{painting.title}</h3>
            <p>{painting.artist}</p>
            <h4>Publication History:</h4>
            <ul>
              {painting.publicationHistory.map((info, index) =>
                <li key={index}>{info}</li>)}
            </ul>
          </li>)}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
