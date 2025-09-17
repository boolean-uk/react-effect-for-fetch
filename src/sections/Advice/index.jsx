import { useState } from 'react'
import AdviceSlip from './components/AdviceSlip.jsx'
import FavouriteSlipsList from './components/FavouriteSlipsList.jsx'


function AdviceSection() {

const [favorites, setFavorites] = useState([])
    
    const handleCreateFavorite = (advice) => {
        setFavorites(oldFavorites => [...oldFavorites, advice])

    }
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <AdviceSlip 
        handleCreateFavorite={handleCreateFavorite}/>
        
      </section>
      <section className="favorite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <FavouriteSlipsList
        favorites={favorites} />
      </section>
    </section>
  )
}

export default AdviceSection
