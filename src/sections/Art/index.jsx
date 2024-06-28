import { useEffect, useState } from "react";

function ArtsSection() {
  const [artData, setArtData] = useState([]);
  console.log("art Data:", artData);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((res) => res.json())
      .then((data) => setArtData(data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artData.map((artItem, index) => (
            <li key={index}>
              <div className="frame">
                <img
                  src={`https://boolean-api-server.fly.dev${artItem.imageURL}`}
                />
              </div>
              <h3>{artItem.title}</h3>
              <p>{artItem.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {artItem.publicationHistory.map((publication, index) => (
                  <li key={index}>{publication}</li>
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
