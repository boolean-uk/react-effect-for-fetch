import React, { useState, useEffect } from 'react';
import AdviceSlip from './components/AdviceSlip';
import FavouriteSlipsList from './components/FavouriteSlipsList';

function AdviceSection() {
  const [advice, setAdvice] = useState('');
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.error('Error fetching advice:', error));
  };

  const addToFavourites = () => {
    setFavourites([...favourites, advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} onFetchAdvice={fetchAdvice} onAddToFavourites={addToFavourites} />
      <FavouriteSlipsList favourites={favourites} />
    </section>
  );
}

export default AdviceSection;


