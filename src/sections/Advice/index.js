import { useEffect, useState } from "react";

import FavouriteSlip from "./components/FavouriteSlipsList";
import AdviceSlip from "./components/AdviceSlip";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favourtiteAdvice, setFavouriteAdvice] = useState([]);

  async function getAdviceData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    setAdvice(json.slip.advice);
  }

  useEffect(() => {
    getAdviceData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    getAdviceData();
  }

  function saveFavouriteAdvice() {
    setFavouriteAdvice((prevFavouriteAdvice) => {
      return [...prevFavouriteAdvice, advice];
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Advice Section</h2>
        <AdviceSlip
          advice={advice}
          saveFavouriteAdvice={saveFavouriteAdvice}
          handleSubmit={handleSubmit}
        />
        <FavouriteSlip favourtiteAdvice={favourtiteAdvice} />
      </form>
    </section>
  );
}

export default AdviceSection;
