import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState();
  const [favourties, setFavourties] = useState([]);
  const [getAdviceClicked, setGetAdviceClicked] = useState(false);

  console.log(advice?.slip?.advice);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(setAdvice);
  }, [getAdviceClicked]);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        getAdviceClicked={getAdviceClicked}
        setGetAdviceClicked={setGetAdviceClicked}
        favourties={favourties}
        setFavourties={setFavourties}
      />
      <FavouriteSlipList favourties={favourties} />
    </section>
  );
}

export default AdviceSection;
