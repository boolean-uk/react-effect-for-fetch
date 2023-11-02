import { useEffect, useState } from "react"

import AdviceSlip from "./components/AdviceSlip"

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
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {faveAdvice.map((someAdvice, index) =>
            <li key={`${someAdvice}-${index}`}>{someAdvice}</li>
          )}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
