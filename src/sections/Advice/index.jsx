import React, { useState, useEffect } from 'react';
import AdviceSlip from './components/AdviceSlip';
import FavoriteSlipsList from './components/FavouriteSlipsList';

function AdviceSection() {
  const [advice, setAdvice] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchAdvice();
    fetchFavorites();
  }, []);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      .catch(error => console.error('Error fetching advice:', error));
  };

  const fetchFavorites = () => {
    const favoriteSlips = localStorage.getItem('favoriteSlips');
    if (favoriteSlips) {
      setFavorites(JSON.parse(favoriteSlips));
    }
  };

  const addToFavorites = () => {
    const newFavorites = [...favorites, advice];
    setFavorites(newFavorites);
    localStorage.setItem('favoriteSlips', JSON.stringify(newFavorites));
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} fetchAdvice={fetchAdvice} addToFavorites={addToFavorites} />
      <FavoriteSlipsList favorites={favorites} />
    </section>
  );
}

export default AdviceSection;
