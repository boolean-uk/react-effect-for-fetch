import { useEffect, useState } from 'react';
const baseAPIUrl = 'https://boolean-api-server.fly.dev';
function ArtsSection() {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetch(`${baseAPIUrl}/art`)
      .then((response) => response.json())
      .then((data) => setArtList(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {
            artList.map((art, index) => (
              <li key={index}>
                <div className='frame'>
                  <img src={`${baseAPIUrl}/${art.imageURL}`} />
                </div>
                <h3>{art.title}</h3>
                <p>Artist: {art.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                  {
                    art.publicationHistory.map((history, index) => (
                      <li key={index}>{history}</li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>

      </div>
    </section>
  )
}

export default ArtsSection