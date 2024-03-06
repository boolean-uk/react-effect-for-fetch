import { useState, useEffect } from "react"
import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection() {
  const [data, setData] = useState("")
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    newAdvice()
  }, [favourites])

  function newAdvice() {
    console.log("new")
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((advice) => setData(advice.slip.advice))
  }
  
  function saveToFavourite() {
    console.log("save")
    setFavourites([...favourites, data])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={data} newAdvice={newAdvice} saveToFavourite={saveToFavourite}/>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList favourites={favourites} />
      </section>
    </section>
  );
}

export default AdviceSection
