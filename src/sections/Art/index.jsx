import { useState, useEffect } from 'react';


function ArtsSection() {
  const [art, setArt] = useState([]);

  console.log(art)
  
  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/art')
      .then(response => response.json())
      .then(responseData => setArt(responseData))
  }, []); 

return (
  <section>
    <h2>Arts Section</h2>
    <div className="scroll-container">
      <ul style={{ listStyleType: 'none' }}>
        {art.map((artElement, id) => (
          <li key={id}>
            <img src={`https://boolean-api-server.fly.dev${artElement.imageURL}`} width={350} />
            <div>
              <p>{artElement.title}</p>
              <p>Artist: {artElement.artist}</p>

              <ul>
                {artElement.publicationHistory.map((publication, id) => (
                  <li key={id}>    
                    {publication}              
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

}

export default ArtsSection
