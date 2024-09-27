import { useEffect, useState } from "react";
import { fetchData } from "../../helpers/FetchData";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favourites, setFavourites] = useState([]);

  const fetchAdvice = async () => {
    const data = await fetchData("https://api.adviceslip.com/advice");
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const saveToFavourites = () => {
    if (advice && !favourites.includes(advice)) {
      setFavourites([...favourites, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        fetchAdvice={fetchAdvice}
        saveToFavourites={saveToFavourites}
      />
      <FavouriteSlipsList favouriteSlips={favourites} />
    </section>
  );
}

export default AdviceSection;
