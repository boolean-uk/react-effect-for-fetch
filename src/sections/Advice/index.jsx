import AdviceSlip from "./components/AdviceSlip";
import { useState } from "react";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip
          setFavouriteSlips={setFavouriteSlips}
          favouriteSlips={favouriteSlips}
          
        />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favouriteSlips={favouriteSlips} />
      </section>
    </section>
  );
}

export default AdviceSection;
