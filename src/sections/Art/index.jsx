import { useState, useEffect } from "react";

function ArtsSection() {

  const [art, setArt] = useState([{publicationHistory: ["a"]}])

  const url = "https://boolean-api-server.fly.dev/art"

  useEffect(() => {
    
    const fetchdata = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setArt(newData);
    };

    fetchdata();

  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
         <ul className="art-list">
          {art.map((elm, key) => 
            <li key={key}>
            <div className="frame">
              <img
                src={"https://boolean-api-server.fly.dev" + elm.imageURL}
              />
            </div>
            <h3>{elm.title}</h3>
            <p>Artist: {elm.artist}</p>
            <h4>Publication History:</h4>
            <ul>
              {elm.publicationHistory.map((pub) => 
              <li>
                {pub}
              </li>)}
            </ul>
          </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection
