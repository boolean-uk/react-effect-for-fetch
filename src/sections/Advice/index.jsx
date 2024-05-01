import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'
import { useState } from 'react'

function AdviceSection() {

  const [favouriteAdvice, setFavouriteAdvice] = useState([])


  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip className="advice-slip" setFavouriteAdvice={setFavouriteAdvice} favouriteAdvice={favouriteAdvice} />
      <FavouriteSlipsList favouriteAdvice={favouriteAdvice} className="favourtite-slips-list" />
    </section>
  )
}

export default AdviceSection
