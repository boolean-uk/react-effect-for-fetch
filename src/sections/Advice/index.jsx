import { useEffect, useState } from "react"

import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {

  const adviceURL = 'https://api.adviceslip.com/advice'

  const [advice, setAdvice] = useState([])
  const [faveAdvice, setFaveAdvice] = useState([])

  useEffect(() => {
      fetch(adviceURL)
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
  }, [])
 
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} adviceURL={adviceURL} setAdvice={setAdvice} faveAdvice={faveAdvice} setFaveAdvice={setFaveAdvice} />
      <FavouriteSlipsList faveAdvice={faveAdvice} />
    </section>
  )
}

export default AdviceSection
