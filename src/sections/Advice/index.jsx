import { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice"
  const [advice, setAdvice] = useState("")
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const adviceResponse = await fetch(url);
      const jsonAdvice = await adviceResponse.json();
      setAdvice(jsonAdvice.slip.advice)
    };
    fetchData();
  }, [advice]);

  const adviceClick = () => {
    setAdvice("")
  }
  const favoriteClick = () => {
    setFavourites([...favourites, advice])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice = {advice} adviceClick={adviceClick} favoriteClick={favoriteClick}/>
      <FavouriteSlipsList favourites={favourites}/>
    </section>
  )
}

export default AdviceSection
