import { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favoriteSlips, setFavoriteSlips] = useState([])

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    setAdvice(data.slip.advice)
  }

  const saveToFavorites = () => {
    setFavoriteSlips([...favoriteSlips, advice])
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} onFetchMore={fetchAdvice} onSaveToFavorites={saveToFavorites} />
      <FavouriteSlipsList favoriteSlips={favoriteSlips} />
    </section>
  )
}

export default AdviceSection
