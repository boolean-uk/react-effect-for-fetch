import React, { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

const AdviceSection = () => {
  const [advice, setAdvice] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data.slip); // Log the API response
        setAdvice(data.slip.advice);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  };

  const saveToFavorites = () => {
    if (advice && !favorites.includes(advice)) {
      setFavorites([...favorites, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        fetchAdvice={fetchAdvice}
        saveToFavorites={saveToFavorites}
      />
      <FavouriteSlipsList favorites={favorites} />
    </section>
  );
};

export default AdviceSection;
