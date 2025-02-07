import React, { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function Advice() {
  const adviceApi = 'https://api.adviceslip.com/advice'
  const [adviceSlip, setAdviceSlip] = useState(null)
  const [favouriteSlips, setFavouriteSlips] = useState([])

  const fetchNewAdvice = async () => {
    const response = await fetch(adviceApi)
    const jsonData = await response.json()
    setAdviceSlip(jsonData)
  }

  const addToFavourites = () => {
    if (adviceSlip.slip.advice && !favouriteSlips.includes(adviceSlip.slip.advice)) {
      setFavouriteSlips([...favouriteSlips, adviceSlip.slip.advice])
    }
  }

  useEffect(() => {
    fetchNewAdvice()
  }, [])

  useEffect(() => {
    const storedFavouriteSlips = localStorage.getItem('favouriteSlips')
    if (storedFavouriteSlips) {
      setFavouriteSlips(JSON.parse(storedFavouriteSlips))
    }
  }, [favouriteSlips])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip 
        adviceData={adviceSlip} 
        onGetMore={fetchNewAdvice}
        onSaveToFavourites={addToFavourites}
      />
      <FavouriteSlipsList favouriteSlips={favouriteSlips} />
    </section>
  )
}

export default Advice
