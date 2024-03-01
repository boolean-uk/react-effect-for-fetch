import { useState, useEffect } from "react";
import AdviceSlip from './components/AdviceSlip' 
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.error("Error fetching advice:", error));
  };

  const addFavouriteSlip = () => {
    if (advice && !favouriteSlips.includes(advice)) {
      setFavouriteSlips([...favouriteSlips, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <div className="scroll-container">
        <AdviceSlip
          advice={advice}
          fetchAdvice={fetchAdvice}
          addFavouriteSlip={addFavouriteSlip}
        />
        <FavouriteSlipsList favouriteSlips={favouriteSlips} />
      </div>
    </section>
  );
}

export default AdviceSection;