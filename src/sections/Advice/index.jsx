import { useState, useEffect} from 'react'
import FavouriteSlipsList from './components/FavouriteSlipsList'
import AdviceSlip from './components/AdviceSlip.jsx'

function AdviceSection() {
  const [adviceObject, setAdviceObject] = useState([])
  const [favouriteAdvice, setFavouriteAdvice] = useState([])

   const baseURL = 'https://api.adviceslip.com/advice'

  const fetchAdvice = () => {
    fetch(baseURL)
    .then(ref => ref.json())
    .then(setAdviceObject)
    console.log(adviceObject)
  }

  const saveToFavourites = () => {
    setFavouriteAdvice([...favouriteAdvice, adviceObject.slip.advice])  
    console.log("hello")
  }

  useEffect(() => {
    fetchAdvice() 
  }, [])


  // Need to prevent the component from loading before im able to pass a valid prop 
  let advice
  if(adviceObject.length !== 0) {
    advice = <AdviceSlip adviceObject={adviceObject} fetchAdvice={fetchAdvice} saveToFavourites={saveToFavourites}/>   
  } else {
    advice = <span>loading...</span>
  }

  //console.log(adviceObject)

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {advice}
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favouriteAdvice={favouriteAdvice} />
      </section>
    </section>
  )
}

export default AdviceSection
