import { useState, useEffect } from "react";

import AdviceSlip from "./components/AdviceSlip.jsx";
import FavouriteSlipsList from "./components/FavouriteSlipsList.jsx";

export default function AdviceSection() {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (advice) => {
    if (!favourites.includes(advice)) {
      setFavourites([...favourites, advice]);
    }
  };

  return (
    <section>
      <code>
        <h2>Advice Section</h2>
        <AdviceSlip addToFavourites={addToFavourites}/>
        <FavouriteSlipsList favourites={favourites}/>
      </code>
    </section>
  );
}
