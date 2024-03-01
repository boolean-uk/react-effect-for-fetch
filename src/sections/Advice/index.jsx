import { useState } from "react"

import AdviceSlip from "./components/AdviceSlip"
import FavourtieSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [randomAdvice, setRandomAdvice] = useState({
    slip: { id: -1, advice: "None" }
  })
  const [savedAdvice, setSavedAdvice] = useState([])

  const newAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then(setRandomAdvice)
  }

  const saveAdvice = () => {
    if (randomAdvice.slip.id === -1) return
    setSavedAdvice([...savedAdvice, randomAdvice.slip])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip newAdvice={newAdvice} saveAdvice={saveAdvice} currentAdvice={randomAdvice.slip} />
      <FavourtieSlipsList advice={savedAdvice} />
    </section>
  )
}

export default AdviceSection
