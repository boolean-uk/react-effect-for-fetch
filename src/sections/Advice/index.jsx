import AdviceSlip from "./components/AdviceSlip"
import { useState } from "react"
import { useEffect } from "react"
import FavouriteSlipList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [adviceSlip, setAdviceSlip] = useState('')
  const [favouriteSlipList, setfavouriteSlipList] = useState([])
  

  const fetchPieceOfAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdviceSlip(data.slip))
  }

  useEffect(fetchPieceOfAdvice, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <AdviceSlip adviceSlip={adviceSlip}/>
        <button onClick={event => fetchPieceOfAdvice()}>Get More Advice</button>
        <button>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipList/>
      </section>
    </section>
  )
}

export default AdviceSection
