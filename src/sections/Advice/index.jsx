import { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [favouriteAdvice, setFavouriteAdvice] = useState([])
  const [adviceData, setAdviceData] = useState(
    {slip:
        {advice: ""}
    }
  )

  useEffect(() => {
  fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(advices => setAdviceData(advices))
  }, [])

  useEffect(() => {
  console.log(adviceData)
  }, [adviceData])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip adviceData={adviceData} setAdviceData={setAdviceData} favouriteAdvice={favouriteAdvice} setFavouriteAdvice={setFavouriteAdvice}/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList adviceData={adviceData} setAdviceData={setAdviceData} favouriteAdvice={favouriteAdvice} />
      </section>
    </section>
  )
}

export default AdviceSection
