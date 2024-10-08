import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"

function AdviceSection() {
  const [advice, setAdvice] = useState("")

  async function fetchAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json() 
    setAdvice(data)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip advice={advice} fetchAdvice={fetchAdvice}/>
      </section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
