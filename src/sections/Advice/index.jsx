import { useState } from 'react'

import AdviceSlip from './components/AdviceSlip';
import FavouriteSlipsList from './components/FavouriteSlipsList';

function AdviceSection() {

  const [favourites, setFavourites] = useState([]);

  const addFavourite = (advice) => {
    if (!favourites.some((favourites) => favourites.id === advice.id)) {
      setFavourites((it) => [...it, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip"></section>
      <AdviceSlip onAddToFavourites={addFavourite} />
      <section className="favourtite-slips-list"></section>
      <FavouriteSlipsList favourites={favourites} />
    </section>
  )
}

export default AdviceSection;
