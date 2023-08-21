import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [adviceSlip, setAdviceSlip] = useState('')
  const [faveSlips, setFaveSlips] = useState([])
  const [requestedNew, setRequestedNew] = useState(false)

  async function getAdviceSlip() {
    const url = `https://api.adviceslip.com/advice`
    const response = await fetch(url)
    const json = await response.json()
    setAdviceSlip(json.slip)
  }

  useEffect(() => {
    getAdviceSlip()
    if (requestedNew) {
      setRequestedNew(false)
    }
  }, [requestedNew])

  const updateFaveSlips = () => {
    // search if slip is already in faveSlips
    const foundSlip = faveSlips.find(slip => slip.id === adviceSlip.id)
    if (!foundSlip) {
      setFaveSlips([...faveSlips, adviceSlip])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip adviceSlip={adviceSlip} setRequestedNew={setRequestedNew} updateFaveSlips={updateFaveSlips} />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList faveSlips={faveSlips} />
      </section>
    </section>
  )
}

export default AdviceSection
