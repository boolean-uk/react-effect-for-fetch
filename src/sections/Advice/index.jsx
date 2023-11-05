import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
import { useEffect } from "react";

function SecAdvice() {
  const [advice, setAdvice] = useState({});
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAdvice = () => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAdvice(data.slip);
      });
  };

  const handleFavorite = (advice) =>
    !favorite.find((item) => item.id === advice.id) &&
    setFavorite([...favorite, advice]);

  useEffect(() => getAdvice(), []);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        handleFavorite={handleFavorite}
        getAdvice={getAdvice}
        loading={loading}
      />
      <FavouriteSlipsList favorite={favorite} />
    </section>
  );
}

export default SecAdvice;
