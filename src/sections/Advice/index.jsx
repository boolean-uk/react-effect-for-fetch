import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
function AdviceSection({ advice, fetchNewAdvice }) {
  const [favouriteAdvice, setFavouriteAdvice] = useState([]);

  const handleSaveToFavourites = () => {
    if (
      advice !== null &&
      !favouriteAdvice.some(
        (existingAdvice) => existingAdvice.slip.id === advice.slip.id
      )
    ) {
      setFavouriteAdvice((prevFavourites) => [...prevFavourites, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        handleSaveToFavourites={handleSaveToFavourites}
        fetchNewAdvice={fetchNewAdvice}
      />
      <FavouriteSlipsList favouriteAdvice={favouriteAdvice} />
    </section>
  );
}
export default AdviceSection;
