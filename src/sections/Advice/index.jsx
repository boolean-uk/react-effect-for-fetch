import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {

  const [currentAdvice, setCurrentAdvice] = useState()
  const [savedAdvice, setSavedAdvice] = useState([])

  const FetchAdvice = async() =>{
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setCurrentAdvice(data)
  }

  useEffect(() => {
    FetchAdvice()
  }, [])

  function SaveAdvice(){
    if(savedAdvice.some((adv) => adv === currentAdvice)){
      return
    }
    setSavedAdvice([...savedAdvice, currentAdvice])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {currentAdvice &&
        <>
          <AdviceSlip adviceData={currentAdvice}/>
        </>        
        }
        <button onClick={() => FetchAdvice()}>Get more advice</button>
        <button onClick={() => SaveAdvice()}>Save to favorites</button>

      </section>
      <section className="favourtite-slips-list">
        {savedAdvice.length > 0 && 
        <>
          <FavouriteSlipsList adviceData={savedAdvice}/>
        </>
        }
      </section>
    </section>
  )
}

export default AdviceSection
