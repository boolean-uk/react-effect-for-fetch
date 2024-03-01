import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [adviceSlip, setAdviceSlip] = useState({})
  const [favouriteAdvices, setfavouriteAdvices] = useState([])

  useEffect(() => {
    setRandomAdvice()
  }, [])

  const setRandomAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setAdviceSlip(data.slip))
  }

  const addToFavourites = (advice) => {
    if (!favouriteAdvices.some(a => a.id === advice.id)) {
      setfavouriteAdvices([...favouriteAdvices, advice])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip adviceSlip={adviceSlip} setRandomAdvice={setRandomAdvice} addToFavourites={addToFavourites}/>
      <FavouriteSlipsList favouriteAdvices={favouriteAdvices} />
    </section>
  )
}

export default AdviceSection
