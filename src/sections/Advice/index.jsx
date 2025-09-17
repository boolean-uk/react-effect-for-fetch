import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip.jsx";
import FavouriteSlipsList from "./components/FavouriteSlipsList.jsx";

const ADVICE_API = "https://api.adviceslip.com";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  const fetchAdvice = () => {
    fetch(`${ADVICE_API}/advice`)
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleSave = () => {
    if (advice && !favouriteSlips.includes(advice)) {
      setFavouriteSlips([...favouriteSlips, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip
          advice={advice}
          onGetMore={fetchAdvice}
          onSave={handleSave}
        />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList items={favouriteSlips} />
      </section>
    </section>
  );
}

export default AdviceSection;