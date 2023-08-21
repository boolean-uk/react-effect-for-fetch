import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavoriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favorites, setFavorites] = useState([])

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => setAdvice(data.slip.advice))
  }

  const addToFavorites = (advice) => {
    if (!favorites.includes(advice)) {
      setFavorites([ ...favorites, advice])
    }
  }

  //extra for deleting the favorites list
  const clearFavorites = () => {
    setFavorites([])
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} getMoreAdvice={fetchAdvice} addToFavorites={addToFavorites} />
      <FavoriteSlipsList favorites={favorites} />
      {favorites.length > 0 && (
        <button onClick={clearFavorites}>Delete All Favorites</button>
      )}
    </section>
  )
}

export default AdviceSection
