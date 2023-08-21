import { useEffect, useState } from "react"

import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice, setAdvice] = useState('')
  const [draw, setDraw] = useState(false)
  const [adviceData, setAdviceData] = useState([])

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const json = await response.json()
    setAdvice(json.slip.advice)
  }

  useEffect(() => {
    getAdvice()
  }, [draw])

  const drawAgain = () => {
    setDraw(!draw)
  }

  const saveAdvice = () => {
    adviceData.push(advice)
    setAdviceData([... adviceData])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip advice={advice} drawAgain={drawAgain} saveAdvice={saveAdvice} />
      <FavouriteSlipsList adviceData={adviceData}/>
    </section>
  )
}

export default AdviceSection
