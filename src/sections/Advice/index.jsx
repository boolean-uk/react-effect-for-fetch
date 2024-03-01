import { useState, useEffect } from 'react';

function AdviceSection() {
  const [advice, setAdvice] = useState([]);

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);


const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        setAdvice([data.slip]);
        setLoading(false);
      })
      .catch(error => console.error('error fetching advice:', error));
  }

  const addToFavorites = () => {
    if (advice.length > 0) {
      setFavorites(prevFavorites => [...prevFavorites, advice[0].advice])
    }
  }

useEffect(() => {
  fetchAdvice();
}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to fetch more advice or perform other actions
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        {loading ? (
          <p>Loading advice...</p>
        ) : (
          advice.map((a, index) => (
            <p key={index}>{a.advice}</p>
          ))
        )}
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={addToFavorites}>Save to Favourites</button>
      </section>
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
         {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
         ))} 
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
