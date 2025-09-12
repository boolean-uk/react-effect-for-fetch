import { useEffect, useState } from "react"

function ArtsSection() {
  const [arts, setArts] = useState([]);
  const url = "https://boolean-uk-api-server.fly.dev/art";
  const baseUrl = "https://boolean-uk-api-server.fly.dev";

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(setArts)
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {arts.map(art =>
            <li key={art.id}>
              <div className="frame">
                <img src = {`${baseUrl}/${art.imageURL}`} alt={art.title}>
                </img>
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {art.publicationHistory.map((publication, index) =>
                  <li key={index}>
                    {publication}
                  </li>
                )
                }
              </ul>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
