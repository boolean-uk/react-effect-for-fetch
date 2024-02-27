import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipList from "./components/FavouriteSlipsList"
import { useState } from "react";

function AdviceSection() {
  const [advice, setAdvice] = useState([])
  
  const addToFavorites = (data) =>
  {
    setAdvice([...advice, data.advice])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip addToFavorites={addToFavorites}/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipList advice={advice}/>
      </section>
    </section>
  )
}

export default AdviceSection
