import { useState, useEffect} from 'react'
import FavouriteSlipsList from './components/FavouriteSlipsList'
import AdviceSlip from './components/AdviceSlip'


function AdviceSection() {
  const [adviceObject, setAdviceObject] = useState([])
  const [favouriteAdvice, setFavouriteAdvice] = useState([])

  const baseURL = 'https://api.adviceslip.com/advice'

  const fetchAdvice = () => {
    fetch(baseURL)
    .then(ref => ref.json())
    .then(setAdviceObject)
  }

  const saveToFavourites = () => {
    setFavouriteAdvice([...favouriteAdvice, adviceObject])  
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  //console.log(adviceObject)

  return (
    <section>
      <h2>Advice Section</h2>

      <section className="adivce-slip"><AdviceSlip adviceObject={adviceObject} fetchAdvice={fetchAdvice} saveToFavourites={saveToFavourites}/></section>
      <section className="favourtite-slips-list"><FavouriteSlipsList favouriteAdvice={favouriteAdvice} /></section>
    </section>
  )
}

export default AdviceSection
