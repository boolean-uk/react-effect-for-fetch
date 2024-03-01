import { useState, useEffect } from 'react'

import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipList from './components/FavouriteSlipsList'

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favouriteSlips, setFavouriteSlips] = useState([])
  const [adviceToggle, setAdviceToggle] = useState(false)

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice",
      {cache: "no-store"})  // Prevents result from being cached, resulting in same response
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
  }, [adviceToggle])

  const handleClick = (event) => {
    if(event.target.value === "getMore")
      setAdviceToggle(!adviceToggle)
    if(event.target.value === "favourite") {
      setFavouriteSlips([...favouriteSlips, advice])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} handleClick={handleClick} />
      <FavouriteSlipList favouriteSlips={favouriteSlips}/>
    </section>
  )
}

export default AdviceSection
