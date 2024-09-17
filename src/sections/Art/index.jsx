import { useState, useEffect } from "react";

function ArtsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/art`)
      .then(response => response.json())
      .then(item => setData(item)) 
      .catch(error => console.error("Fetching error: ", error));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {data.map((item, index) => (
            <li key={index}>
              <div className="frame">
                <img
                  src={`https://boolean-api-server.fly.dev${item.imageURL}`} 
                  alt={item.title}
                />
              </div>
              <h3>{item.title}</h3>
              <p>Artist: {item.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {item.publicationHistory.map((history, index) => (
                  <li key={index}>{history}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
