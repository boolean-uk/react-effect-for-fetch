import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"
import { useState, useEffect } from "react"


function AdviceSection() {

  const [advice, setAdvice] = useState(undefined)
  const [savedAdvice, setSavedAdvice] = useState([])

  function getSlip(){
    fetch("https://api.adviceslip.com/advice") 
     .then((response) => response.json())
     .then((data) => setAdvice(data.slip.advice))
     .catch((error) => console.error('Error fetching advice:', error));
 }

  function saveSlip() {
    if (advice && !savedAdvice.includes(advice)) {
      setSavedAdvice((prevSavedAdvice) => [...prevSavedAdvice, advice]);
    }
  }

  useEffect(() => 
  {
    getSlip()
  },  [])

  // useEffect(() => {
  //   console.log("UseEffect:", advice);
  // }, [advice]);

  // useEffect(() => 
  // {
  //   console.log("SavedAdvice:", savedAdvice)
  // },  [savedAdvice])

  return (
<section>
  <h2>Advice Section</h2>
    <AdviceSlip advice={advice} getSlip={getSlip} saveSlip={saveSlip}/>
    <FavouriteSlipsList  savedAdvice={savedAdvice}/>
</section>
  )
}

export default AdviceSection
