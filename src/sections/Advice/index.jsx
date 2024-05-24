import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [adviceUrl, setAdviceUrl] = useState("https://api.adviceslip.com/advice")
  const [advice, setAdvice] = useState({})
  const [adviceList, setAdviceList] =useState ([])

const generateAdvice = () => (
  fetch(adviceUrl)
  .then((res) => res.json())
  .then((data) => {setAdvice(data.slip)})
) 

useEffect(() => {
  generateAdvice()
}, [adviceUrl])

const addToList = () => (
  setAdviceList((prevList) => [...prevList, advice.advice])
)
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} generateAdvice={generateAdvice} addToList={addToList}></AdviceSlip>
      <section className="favourtite-slips-list">
      <FavouriteSlipsList adviceList={adviceList}></FavouriteSlipsList>
      </section>
    </section>
  )
}

export default AdviceSection
