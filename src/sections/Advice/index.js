import React, { useState } from 'react'
import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection() {
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  const addToFavourites = (adviceSlip) => {
    setFavouriteSlips([...favouriteSlips, adviceSlip]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip addToFavourites={addToFavourites} />
      </section>
      <section className="favourite-slips-list">
        <FavouriteSlipsList favouriteSlips={favouriteSlips} />
      </section>
    </section>
  );
}

export default AdviceSection;