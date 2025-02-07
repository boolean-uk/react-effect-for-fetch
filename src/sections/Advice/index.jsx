import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [favouriteAdvice, setFavouriteAdvice] = useState([]);
  const [currentAdvice, setCurrentAdvice] = useState("");

  const getRandomAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Failed to fetch data, check if json server is live and on port 3000!"
          );
        }
        return res.json();
      })
      .then((data) => setCurrentAdvice(data.slip.advice));
  };

  const saveToFavourties = () => {
    if (favouriteAdvice.includes(currentAdvice)) return;
    setFavouriteAdvice((a) => [...a, currentAdvice]);
  };

  useEffect(getRandomAdvice, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip
          advice={currentAdvice}
          getRandomAdvice={getRandomAdvice}
          saveToFavourties={saveToFavourties}
        />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favourites={favouriteAdvice} />
      </section>
    </section>
  );
}

export default AdviceSection;
