import "../../App.css";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipList from "./components/FavouriteSlipsList";
import { useState, useEffect } from "react";

const baseURL = "https://api.adviceslip.com/advice"

function AdviceSection() {
  const[favourites, setFavourites] = useState([]);
  const[data, setData] = useState({});


  const fetchData = async () => {
      const response = await fetch(baseURL);
      const jsonData = await response.json();
      setData(jsonData);
  }

  useEffect(() => {
      fetchData();
  }, [])

  function saveToFavourites(){
    setFavourites([...favourites, {...data}])
  }

  const propsList = {
    "data": data,
    "setData": setData,
    "favourites": favourites,
    "setFavourites": setFavourites,
    "fetchData": fetchData,
    "saveToFavourites": saveToFavourites
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"> <AdviceSlip propsList={propsList} data={data} /> </section>
      <section className="favourtite-slips-list"> <FavouriteSlipList favourites={favourites}/> </section>
    </section>
  )
}

export default AdviceSection
