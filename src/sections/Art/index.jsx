import { useState, useEffect} from 'react'
function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art"
  const [arts, setArts] = useState([])


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(d=>setArts(Array.isArray(d)?d:(d.data||[])))
      .catch((error) => console.error('Error fetching arts:', error));
  }, [])


  

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {arts ? (
          arts.map((art) => (
            <div key={art.id} className="card">
              <img src={new URL(art.imageURL, url).href} alt={art.title} className="img" loading="lazy" />
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History</h4>
              <ul>
              {art.publicationHistory && art.publicationHistory.length>0 ? art.publicationHistory.map((pub, idx)=>(
                <li key={idx}>{pub}</li>
              )) : <li>No publication history available</li>}
              </ul>
            </div>
          ))
        ) : (
          <p>Loading arts...</p>
        )}
      </div>
    </section>
  )
}

export default ArtsSection
