import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {

  const initialFav = [
    {
      slip:{advice: "Measure twice, cut once."}
    },
    {
      slip:{advice: "Don't let the bastards grind you down."}
    },
    {
      slip:{advice: "Always the burrito."}
    }
  ]

  const [advice, setAdvice] = useState('')
  const [favorites, setFavorites] = useState(initialFav)
  
  async function nextAdvice () {
    await fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(setAdvice)
  }

  const saveFavorites = (event) => {
    event.preventDefault()
    console.log(favorites)
    if(!favorites.includes(advice))
    setFavorites([...favorites, advice])
  }

  useEffect(() => {
    nextAdvice()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} nextAdvice={nextAdvice} saveFavorites={saveFavorites}/>
      <FavouriteSlipsList favorites={favorites} />
    </section>
  )
}

export default AdviceSection
