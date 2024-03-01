import { useState, useEffect } from "react";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
import AdviceSlip from "./components/AdviceSlip";

function AdviceSection() {
  const [adviceSlip, setAdviceSlip] = useState("");
  const [favourtites, setFavorites] = useState([]);
  const [wantNewAdvice, setWantNewAdvice] = useState(true);

  useEffect(() => {
    // Only want a new advice after clicking on the button
    if (!wantNewAdvice) return;

    // Use {cache: "no-store"} to be able to get a new advice when clicking on the button
    fetch(`https://api.adviceslip.com/advice`, { cache: "no-store" })
      .then((response) => response.json())
      .then((item) => setAdviceSlip(item.slip.advice));
    setWantNewAdvice(false);
  }, [wantNewAdvice]);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        adviceSlip={adviceSlip}
        favourtites={favourtites}
        setFavorites={setFavorites}
        setWantNewAdvice={setWantNewAdvice}
      />
      <FavouriteSlipsList favourtites={favourtites} />
    </section>
  );
}

export default AdviceSection;
