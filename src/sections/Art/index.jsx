import { useEffect, useState } from "react";

const url = "https://boolean-api-server.fly.dev"

function ArtsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/art')
    .then(response => response.json())
    .then(setData)
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {data.map((item, index) => (
            <li key={index}>
              <div className="frame">
                <img src={url+`${item.imageURL}`} />
              </div>
              <h3>{item.title}</h3>
              <p>Artist: {item.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {item.publicationHistory.map((publication, pidx) => (
                  <li key={pidx}>
                    {publication}
                  </li>
                ))}
              </ul>
            </li>
          ))
          }
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
