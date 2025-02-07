import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [favoriteAdviceSlips, setFavoriteAdviceSlips] = useState([]);
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip setFavoriteAdviceSlips={setFavoriteAdviceSlips} />
      </section>

      <section className="favourtite-slips-list">
        <FavouriteSlipsList favoriteAdviceSlips={favoriteAdviceSlips} />
      </section>
    </section>
  );
}

export default AdviceSection;
