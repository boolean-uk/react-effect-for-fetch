import { useState, useEffect } from "react";

function ArtListItem() {
  //const { art } = props;

  const [art, setArt] = useState([]);

  useEffect(() => {
    
      fetch("https://boolean-api-server.fly.dev/art")
        .then((res) => res.json())
        .then((data) => setArt(data));
    
  }, []);

  return (
    <>
    {art.map((art, index) => (
    <li key = {index}>      
            <div className="frame">
                <img
                src={`https://boolean-api-server.fly.dev${art.imageURL}`}
                alt={art.title}
                />
            </div>
          <h3>{art.title}</h3>
          <p>Artist: {art.artist}</p>
          <h4>Publication History:</h4>
          <ul>
                {art.publicationHistory.map((historyItem, index) => (
                    <li key={index}>{historyItem}</li>
                ))}
          </ul>
    
      
      
    </li>
    ))}
    </>
  );
}

export default ArtListItem;