import { useState, useEffect } from 'react'
import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection() {
  const [currentAdvice, setCurrentAdvice] = useState(null)
  const [favouriteSlips, setFavouriteSlips] = useState([])

  const fetchAdvice = () => {
    fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`)
      .then(response => response.json())
      .then(data => setCurrentAdvice(data.slip))
      .catch(error => console.error('Error fetching advice:', error))
  }

  const saveToFavourites = () => {
    if (currentAdvice && !favouriteSlips.some(slip => slip.id === currentAdvice.id)) {
      setFavouriteSlips([...favouriteSlips, currentAdvice])
    }
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <AdviceSlip
          advice={currentAdvice}
          onGetNewAdvice={fetchAdvice}
          onSaveToFavourites={saveToFavourites}
        />
      </section>
      <section className="favourite-slips-list">
        <FavouriteSlipsList favouriteSlips={favouriteSlips} />
      </section>
    </section>
  )
}

export default AdviceSection
