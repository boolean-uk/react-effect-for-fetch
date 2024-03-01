import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  }, [refresh]);

  const saveToFavorite = () => {
    if (!favorites.includes(advice)) {
      setFavorites([...favorites, advice]);
    }
  };

  const refreshAdvice = () => {
    setRefresh(refresh + 1);
  };

  return (
    <section className="advice-section">
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        saveToFavorite={saveToFavorite}
        refreshAdvice={refreshAdvice}
      />

      <FavoriteSlipsList favorites={favorites} />
    </section>
  );
}

export default AdviceSection;
