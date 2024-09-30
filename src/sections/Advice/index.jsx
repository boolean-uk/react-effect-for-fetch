import { useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [favouritesList, setFavouritesList] = useState([])

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip favouritesList={favouritesList} setFavouritesList={setFavouritesList}/>
      <FavouriteSlipsList favouritesList={favouritesList}/>
    </section>
  )
}

export default AdviceSection
