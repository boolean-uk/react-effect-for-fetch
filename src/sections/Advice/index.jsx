import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState();
  const [favoriteAdvice, setFavoriteAdvice] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  }, []);

  const onClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice));
  };

  const likeAdvice = () => {
    favoriteAdvice.push(advice);
    setFavoriteAdvice(favoriteAdvice);
    console.log(favoriteAdvice);
    onClick();
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip
          advice={advice}
          newAdvice={onClick}
          likeAdvice={likeAdvice}
        />
      </section>
      <FavouriteSlipList favouriteAdvices={favoriteAdvice}/>
    </section>
  );
}

export default AdviceSection;
