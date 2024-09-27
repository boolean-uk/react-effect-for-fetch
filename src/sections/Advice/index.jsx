import { useState, useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

const URL = "https://api.adviceslip.com/advice"
function AdviceSection() {
  const [advice, setAdvice] = useState([])
  const [favourites, setFavourites] = useState([])

  const getAdvice = (e) => {
    fetch(URL, {}).then((reponse) => {
      return reponse.json();
    }).then((jsonData) => {
      setAdvice(jsonData)
    })
  }
  
  const addToFavourites = (e) =>{
    favourites.push(advice)
    setFavourites([...favourites])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} getAdvice={getAdvice} addToFavourites={addToFavourites}/>
      <FavouriteSlipsList favourites={favourites}/>
    </section>
  )
}

export default AdviceSection
