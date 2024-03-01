import { useState, useEffect } from 'react'

import AdviceSlip from './components/AdviceSlip'

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favouriteSlips, setFavouriteSlips] = useState([])
  const [adviceToggle, setAdviceToggle] = useState(false)

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
  }, [adviceToggle])

  const handleClick = (event) => {
    setAdviceToggle(!adviceToggle)
    console.log(advice)
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        {advice !== "" &&
        <p>{advice}</p>
        }
        <button onClick={handleClick}>Get More Advice</button>
    </section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
