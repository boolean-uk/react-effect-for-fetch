import {useState, useEffect} from 'react'

export default function Test() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((response) => response.json().then((response) => response.results))
      .then(setShips);
      
  }, []);

  return (
    <div className="app">
      <h1>Star wars Ships!</h1>
      {ships.length === 0 ? (
        <p>No ships here...</p>
      ) : (
        <ul>
          {ships.map((ships, index) => (
            <li key={index} style={{color: 'red'}}>{ships.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}