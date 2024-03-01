import { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

const apiUrl = 'https://api.adviceslip.com/advice'

function AdviceSection() {
const [currentAdvice, setCurrentAdvice] = useState(null)
const [favouriteAdvice, setFavouriteAdvice] = useState([])

async function getAdvice() {
  const timestamp = new Date().getTime()
  const urlWithCacheBuster = `${apiUrl}?_=${timestamp}`

  await fetch(urlWithCacheBuster)
  .then(res => res.json())
  .then(data => setCurrentAdvice(data))
}

function addToFavorites(advice) {
  if (!favouriteAdvice.includes(advice))
  setFavouriteAdvice([...favouriteAdvice, advice])
}

useEffect(() => {
  getAdvice()
}, [])


  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={currentAdvice} getAdvice={getAdvice} addToFavorites={addToFavorites} />
      <FavouriteSlipsList favouriteAdvice={favouriteAdvice}/>
    </section>
  )
}

export default AdviceSection
