import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function Advice() {
  const [currentSlip, setCurrentSlip] = useState(null);
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  useEffect(() => {
    fetchNewSlip();
  }, []);

  function fetchNewSlip() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setCurrentSlip(data.slip));
  }

  function saveToFavourites() {
    setFavouriteSlips([...favouriteSlips, currentSlip]);
  }

  return (
    <div>
      <button onClick={fetchNewSlip}>Fetch New Slip</button>
      <AdviceSlip slip={currentSlip} onSave={saveToFavourites} />
      <FavouriteSlipsList slips={favouriteSlips} />
    </div>
  );
}

export default Advice;
