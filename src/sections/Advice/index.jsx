import { useState, useEffect } from 'react'
import AdviceSlip from "./components/AdviceSlip.jsx"
import FavouriteSlipsList from "./components/FavouriteSlipsList.jsx"

function AdviceSection() {
  const [advice, setAdvice] = useState({})
  const [favouriteAdvice, setFavouriteAdvice] = useState([])

  const addToFavouriteAdvice = async (id) => {
    await fetch(`https://api.adviceslip.com/advice/${id}`)
      .then((res) => res.json())
      .then((res) => setFavouriteAdvice([...favouriteAdvice, res.slip]))
  }

  const retrieveAdvice = async () => {
    await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache"
    })
      .then((res) => res.json())
      .then((res) => setAdvice(res.slip))
  }

  useEffect(() => {
    retrieveAdvice()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} retrieveAdvice={retrieveAdvice} saveAdvice={addToFavouriteAdvice}/>
      <FavouriteSlipsList favouriteAdvice={favouriteAdvice} />
    </section>
  )
}

export default AdviceSection
