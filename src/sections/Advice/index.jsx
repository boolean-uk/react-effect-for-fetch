import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice, setAdvice] = useState(undefined)
  const [favourites, setFavourites] = useState([])

  async function getASlip() {
    await fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(setAdvice)
  }

  function addToFavourites(event) {
    console.log(event)
    if (!favourites.includes(advice))
      setFavourites([...favourites, advice])
  }

  useEffect(() => {
    getASlip()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} getASlip={getASlip} addToFavourites={addToFavourites} />
      <FavouriteSlipsList favourites={favourites} />
    </section>
  )
}
export default AdviceSection