
import React, { useState, useEffect } from "react";
import AdviceSlip from "./AdviceSlip";
import FavouriteSlipsList from "./FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favoriteAdvices, setFavoriteAdvices] = useState([]);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  };

  const saveToFavorites = () => {
    if (advice && !favoriteAdvices.includes(advice)) {
      setFavoriteAdvices([...favoriteAdvices, advice]);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        fetchAdvice={fetchAdvice}
        saveToFavorites={saveToFavorites}
      />
      <FavouriteSlipsList favoriteAdvices={favoriteAdvices} />
    </section>
  );
}

export default AdviceSection;
