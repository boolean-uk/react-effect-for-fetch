import { useState, useEffect } from "react";

import FavouriteSlipsList from "./components/FavouriteSlipsList";
import AdviceSlip from "./components/AdviceSlip";

function AdviceSection() {
  const [advice, setAdvice] = useState({id: -1, advice: ''});
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getNewAdvice().then(data => setAdvice(data));
  }, []);

  const getNewAdvice = async () => {
    let data = await fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data => data.slip); 
    return data
  }

  const refetch = () => getNewAdvice().then(data => setAdvice(data));
  const saveToFavourites = () => setFavourites([...favourites, advice]);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
        <AdviceSlip advice={advice} refetch={refetch} saveToFavourites={saveToFavourites} />
      <section className="favourtite-slips-list"></section>
        <FavouriteSlipsList favourites={favourites} />
    </section>
  )
}

export default AdviceSection
