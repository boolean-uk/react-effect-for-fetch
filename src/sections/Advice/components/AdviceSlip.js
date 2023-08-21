import React, { useState, useEffect } from 'react'

function AdviceSlip({ addToFavourites }) {
  
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchRandomAdvice();
  }, []);
  
  const fetchRandomAdvice = () => {
    const apiUrl = 'https://api.adviceslip.com/advice?' + Math.random();
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      });
  };
  
  const handleAddToFavourites = () => {
    addToFavourites(advice);
  };

  return (
    <div className="advice-slip">
      <h2>Some Advice</h2>
      <p>{advice}</p>
      <button onClick={fetchRandomAdvice}>Get More Advice</button>
      <button onClick={handleAddToFavourites}>Add to Favourites</button>
    </div>
  );
}

export default AdviceSlip;