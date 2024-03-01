import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [favoriteAdvices, setFavoriteAdvices] = useState([]);

  const addFavorite = (advice) => {
    if(favoriteAdvices.some((a) => a === advice)){
      return;
    }
    setFavoriteAdvices([...favoriteAdvices, advice])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip saveAdvice={addFavorite} />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favorites={favoriteAdvices} />
      </section>
    </section>
  )
}

export default AdviceSection
