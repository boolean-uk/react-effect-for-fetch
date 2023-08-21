import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavourtiteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice,setAdvice] = useState('')
  const [getNew,setGetNew] = useState(false)
  const [adviceList,setAdviceList] = useState([])

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const json = await response.json()
    setAdvice(json)
    console.log(advice.slip.advice)
  }

  function addToList() {
    setAdviceList([...adviceList,advice.slip.advice])
    console.log(adviceList)
  }

  useEffect(() => {
    getAdvice()
    setGetNew(false)
  },[getNew])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {advice !== '' && <AdviceSlip advice={advice.slip} setGetNew={setGetNew} addToList={addToList}/>}
      </section>
      <section className="favourtite-slips-list">
        <FavourtiteSlipsList adviceList={adviceList}/>
      </section>
    </section>
  )
}

export default AdviceSection
