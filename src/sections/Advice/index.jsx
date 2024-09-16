import { useState } from 'react'
import AdviceSlip from './components/AdviceSlip.jsx'
import FavouriteSlipsList from './components/FavouriteSlipsList.jsx'

function AdviceSection() {
  
  const [favourits, setFavourits] = useState([])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip favourits={favourits} setFavourits={setFavourits}/>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favourits={favourits} setFavourits={setFavourits}/>
      </section>
    </section>
  )
}

export default AdviceSection
