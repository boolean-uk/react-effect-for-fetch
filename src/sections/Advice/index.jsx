import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const URL = 'https://api.adviceslip.com/advice';

  const fetchAdvice = async () => {
    const response = await fetch(URL);
    const jsonData = await response.json();
    setAdvice(jsonData.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const addToFavourites = () => {
    if (advice && !favourites.some(fav => fav.id === advice.id)) {
      setFavourites([...favourites, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip advice={advice} fetchAdvice={fetchAdvice} addToFavourites={addToFavourites} />
      </section>
      <section className="favourite-slips-list">
        <FavouriteSlipsList favourites={favourites} />
      </section>
    </section>
  );
}

export default AdviceSection;

