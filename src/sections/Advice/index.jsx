import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [favourites, setFavourites] = useState([]);

  const fetchAdvice = async () => {
    console.log("Fetching advice");
    const response = await fetch(url);
    const jsonData = await response.json();
    setAdvice(jsonData.slip.advice);
  }

  const saveToFavourites = () => {
    if (favourites.includes(advice)) {
      return;
    }
    setFavourites((prevFavourites) => [...prevFavourites, advice]);
    console.log("Added advice");
  }

  useEffect( () => {
    fetchAdvice();
  } , []);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip 
        advice={advice} 
        fetchAdvice={fetchAdvice} 
        saveToFavourites={saveToFavourites}
      />
      <FavouriteSlipsList favourites={favourites}/>
    </section>
  )
}

export default AdviceSection
