import { useEffect, useState } from "react"

import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {

  const adviceURL = 'https://api.adviceslip.com/advice'

  const [advice, setAdvice] = useState([])
  const [dataType, setDataType] = useState('')

  useEffect(() => {
    if (!dataType) {
      fetch(adviceURL)
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
    }
  }, [dataType])

  const [faveAdvice, setFaveAdvice] = useState([])
 
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} adviceURL={adviceURL} setAdvice={setAdvice} faveAdvice={faveAdvice} setFaveAdvice={setFaveAdvice} />
      <FavouriteSlipsList faveAdvice={faveAdvice} />
    </section>
  )
}

export default AdviceSection
