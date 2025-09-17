import { useEffect, useState } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [advice, setAdvice] = useState()
  const [favAdvice, setFavAdvice] = useState([])

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    setAdvice(data)
  }

  useEffect(() => {
    fetchAdvice()

    // fetch('https://api.adviceslip.com/advice')
    // .then(res => res.json())
    // .then(data => setAdvice(data))
  }, [])

  function onSaveToFavourites() {
    if (advice) {
      setFavAdvice(prev => [...prev, advice])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      
      <AdviceSlip adviceInfo={advice}/>
            
      <button onClick={fetchAdvice}>Get More Advice</button>
      <button onClick={onSaveToFavourites}>Save to Favourites</button>
      
      <FavouriteSlipsList favouritesList={favAdvice}/>

    </section>
  )
}

export default AdviceSection


