import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const url = 'https://api.adviceslip.com/advice';

  const [advice, setAdvice] = useState({});
  const [favouriteAdviceSlips, setfavouriteAdviceSlips] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setAdvice(jsonData);
  };

  useEffect(() => {
    fetchData()
  }, []);

  const handleNewAdivce = () => {
    fetchData();
  }

  const handleAddToFavourites = () => {
    setfavouriteAdviceSlips([...favouriteAdviceSlips, advice.slip.advice])
  }
 
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <AdviceSlip advice={advice} />
        <button onClick={() => handleNewAdivce()}>Get More Advice</button>
        <button onClick={() => handleAddToFavourites()}>Save to Favourties</button>
      </section>
      
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          <FavouriteSlipsList favouriteAdviceSlips={favouriteAdviceSlips} />
        </ul>
      </section>

    </section>
  )
}

export default AdviceSection
