import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlips from "./components/FavouriteSlipsList"
import { useEffect, useState } from "react"

function AdviceSection() {

  const [adviceSlip, setAdviceSlip] = useState([]);
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setAdviceSlip(data.slip))  
      .catch((error) => console.error('Error fetching data:', error));
  };

  const saveToFavourites = () => {
    setFavouriteSlips((prevFavourites) => [... prevFavourites, adviceSlip]);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);




  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip adviceSlip = {adviceSlip} getMoreAdvice={fetchAdvice} saveToFavourites = {saveToFavourites}/>
      <FavouriteSlips favouriteSlips = {favouriteSlips} />
    </section>
  )
}

export default AdviceSection
