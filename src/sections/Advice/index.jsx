import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [adviceData, setAdviceData] = useState(null)
  const [favouriteAdvice, setFavouriteAdvice] = useState([])
  const [moreAdvice, setMoreAdvice] = useState(false)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(setAdviceData)
  }, [moreAdvice])

  function handleClick() {
    setMoreAdvice(!moreAdvice)
  }

  function handleFavourites() {
    if (!favouriteAdvice.includes(adviceData)) {
      setFavouriteAdvice([
        ...favouriteAdvice,
        adviceData
      ])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip adviceData={adviceData} handleClick={handleClick} handleFavourites={handleFavourites}/>
      <FavouriteSlipsList favouriteAdvice={favouriteAdvice}/>
    </section>
  )
}

export default AdviceSection
