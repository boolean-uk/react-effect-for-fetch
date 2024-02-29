import { useState, useEffect } from "react";

import AdviceSlip from "./components/AdviceSlip.jsx"
import FavouriteSlipsList from "./components/FavouriteSlipsList.jsx"



function AdviceSection() {

  const [slip, setSlip] = useState({advice: "Remember that spiders are more afraid of you, than you are of them.", id: 1})
  const [fav, setFav] = useState([])

  function newAdvice(){
    fetch("https://api.adviceslip.com/advice", {
      method: "GET"
    })
    .then((response) => response.json())
      .then((data) => {
        setSlip(data.slip);
      })
      .catch((error) => console.log(error));
  }

  function saveAdvice(){
    if(!fav.includes(slip.advice)){
      setFav([...fav, slip.advice])
    }

  }

  useEffect(() => {
    newAdvice()
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"><AdviceSlip advice = {slip.advice} newAdvice = {newAdvice} saveAdvice = {saveAdvice}/></section>
      <section className="favourtite-slips-list"><FavouriteSlipsList advice = {slip.advice} fav = {fav}/></section>
    </section>
  )
}

export default AdviceSection
