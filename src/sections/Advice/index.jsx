import { useEffect, useState } from "react"
import AdviceSlipComponent from "./components/AdviceSlip"
import FavouriteSlipsListComponent from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice, setRandomAdvice] = useState({})
  //const [favAdviceData, setFavAdviceData] = useState([])
  const randNum = Math.floor(Math.random() * 224)
  const baseRandURL = `https://api.adviceslip.com/advice/${randNum}`
  
  useEffect(() => {
    fetch(baseRandURL)
    .then((res) => res.json())
    .then(setRandomAdvice) 
      }, [])
  
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlipComponent advice={advice}/>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
      </section>
    </section>
  )
}

export default AdviceSection
