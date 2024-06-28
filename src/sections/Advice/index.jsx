import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [randomAdvice, setRandowAdvice] = useState("");
  const [favouriteAdvice, setFavouriteAdvice] = useState([]);
  const [getAdvice, setGetAdvice] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setRandowAdvice(data.slip.advice));
  }, [getAdvice]);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        randomAdvice={randomAdvice}
        getAdvice={getAdvice}
        setGetAdvice={setGetAdvice}
        setFavouriteAdvice={setFavouriteAdvice}
        favouriteAdvice={favouriteAdvice}
      />
      <FavouriteSlipsList favouriteAdvice={favouriteAdvice} />
    </section>
  );
}

export default AdviceSection;
