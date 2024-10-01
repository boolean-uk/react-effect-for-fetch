import { useState, useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const url = '	https://api.adviceslip.com/advice'
  const [adviceData, setAdviceData] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setAdviceData(jsonData.slip)
  };

  const SaveFavourite = () => {
    setFavourites([...favourites, adviceData.advice])
  }

  return (
    <div>
      <AdviceSlip adviceItem={adviceData} addTofavouriteList={SaveFavourite} newAdvice={fetchData}/>
      <FavouriteSlipsList favourites={favourites}/>
    </div>
  )
}

export default AdviceSection
