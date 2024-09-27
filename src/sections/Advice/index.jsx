import AdviceSlip from "./components/AdviceSlip"
import { useState } from "react"
import { useEffect } from "react"
import FavouriteSlipList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [adviceSlip, setAdviceSlip] = useState('')
  const [favouriteSlipList, setFavouriteSlipList] = useState([])
  

  const fetchPieceOfAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdviceSlip(data.slip))
  }

  const saveToFavourites = () => {
    const addedFavourite = adviceSlip.advice
    if(favouriteSlipList.includes(addedFavourite)){
      return
    } else (
    setFavouriteSlipList([...favouriteSlipList, addedFavourite])
    )
  }

  useEffect(fetchPieceOfAdvice, [])

  console.log(favouriteSlipList)

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <AdviceSlip adviceSlip={adviceSlip}/>
        <button onClick={fetchPieceOfAdvice}>Get More Advice</button>
        <button onClick={saveToFavourites}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipList favouriteSlipList={favouriteSlipList}/>
      </section>
    </section>
  )
}

export default AdviceSection
