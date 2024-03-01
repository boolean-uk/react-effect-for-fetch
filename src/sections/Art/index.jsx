import { useEffect, useState } from "react";

function ArtsSection() {



  const [art, setArt] = useState([]);



  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/art")
    .then(response => response.json())
    .then(setArt)

  }, []);


  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul className="art-list">
        {art.map((art, index) => (
          <li key={index}>
            <div className="frame">
              <img
                src={`https://boolean-api-server.fly.dev${art.imageURL}`}
              />
            </div>
            <h3>{art.title}</h3>
            <p>{art.artist}</p>
            <h4>Publication History:</h4>
            <ul>
              {art.publicationHistory.map((publication , index) =>
              <li key={index}>{publication}</li>
              )}
            </ul>
          </li>
        )
        
        )}
        </ul> 
      </div>
    </section>
  )
}

export default ArtsSection
