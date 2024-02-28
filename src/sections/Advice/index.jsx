import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";


function AdviceSection() {
  const [favAdvices, setFavAdvices] = useState([]);

  const addToFavorite = (advice) => {
    if (favAdvices.some((a) => a === advice)) return;
    setFavAdvices([...favAdvices, advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section >
        <AdviceSlip saveAdvice={addToFavorite} />
      </section>
      <section >
        <FavouriteSlipsList favs={favAdvices} />
      </section>
    </section>
  )
}

export default AdviceSection
