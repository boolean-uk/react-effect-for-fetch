import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {


    const [currentAdvice, setCurrentAdvice] = useState("");
    const [favorites, setFavorites] = useState([]);

    const fetchAdvice = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          setCurrentAdvice(data.slip.advice);
        })
        .catch((error) => console.error("Error fetching advice:", error));
    };

    const saveToFavorites = () => {
      if (!favorites.includes(currentAdvice)) {
        setFavorites((prevFavorites) => [...prevFavorites, currentAdvice]);
      }
    };

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip currentAdvice={currentAdvice} fetchAdvice={fetchAdvice} saveToFavorites={saveToFavorites}/>
      <FavouriteSlipsList favorites={favorites}/>
    </section>
  )
}

export default AdviceSection
