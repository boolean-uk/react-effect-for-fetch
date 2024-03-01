import { useEffect, useState } from "react"
import FavouriteSlips from "./components/FavouriteSlipsList"
import AdviceSlip from "./components/AdviceSlip"

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favAdvice, setFavAdvice] = useState([])

  useEffect(() => getAdvice(), []) 

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((item) => setAdvice(item.slip.advice));
  }

  const addToFavourites = () => {
    setFavAdvice([...favAdvice, advice])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip 
        advice={advice}
        getAdvice={getAdvice}
        addToFavourites={addToFavourites}
      />
      <FavouriteSlips favAdvice={favAdvice}/>
    </section>
  );
}

export default AdviceSection
