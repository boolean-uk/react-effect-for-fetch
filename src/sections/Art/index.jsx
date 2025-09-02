/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

function ArtsSection() {

  const url = "https://boolean-uk-api-server.fly.dev/art";
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData); 
    };
    fetchData();
  }, []);



  return (
    <section>
      <h2>Arts Section</h2>
      
      <div className="scroll-container">
        <ul className="art-list">
          {data.map((art, index) => (
            <li key={index}>
              <div className="frame">
                <img
                  src={"https://boolean-uk-api-server.fly.dev"+art.imageURL}
                />
              </div>
              <h3>{art.title}</h3>
              <p>Artist: {art.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                {art.publicationHistory.map((history, index) => (
                  <li key={index}>{history}</li>
                ))}
              </ul>
            </li>
            
          ))}
        </ul>
      </div>
      
    </section>

  )
}

export default ArtsSection
