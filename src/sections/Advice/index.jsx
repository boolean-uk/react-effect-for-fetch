import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"
import { useEffect, useState } from 'react'

function AdviceSection() {
  const [favorites, setFavorites] = useState([])
  const [slip, setSlip] = useState(undefined)

  async function fetchSlip() {
      await fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(setSlip)
    }
    
    function addToFavorites() {
      if (!favorites.includes(slip))
      setFavorites([...favorites, slip])
    }

    useEffect(() => {
      fetchSlip()
    }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip slip={slip} fetchSlip={fetchSlip} addToFavorites={addToFavorites} />
      <FavouriteSlipsList favorites={favorites}/>
    </section>
  )
}

export default AdviceSection
