import { useState } from "react"
import { useEffect } from "react"
import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const [random, setRandom] = useState(null)
  const [firstFavourite, setFirstFavourite] = useState(null)
  const [secondFavourite, setSecondFavourite] = useState(null)
  const [thirdFavourite, setThirdFavourite] = useState(null)
  const [newAdvice, setNewAdvice] = useState(null)
  const [saveRandom, setSaveRandom] = useState(null)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(setRandom)

    fetch('https://api.adviceslip.com/advice/1')
      .then(res => res.json())
      .then(setFirstFavourite)
      
    fetch('https://api.adviceslip.com/advice/2')
      .then(res => res.json())
      .then(setSecondFavourite)

    fetch('https://api.adviceslip.com/advice/3')
      .then(res => res.json())
      .then(setThirdFavourite)
  }, [])

  const handleClick = () => {
    fetch('https://api.adviceslip.com/advice/4')
      .then(res => res.json())
      .then(item => {
        setNewAdvice(item.slip.advice)
      })
  }
    
  return (
    <section>
      <h2>Advice Section</h2>
      {random && firstFavourite && secondFavourite && thirdFavourite && (
        <>
          <AdviceSlip 
            handleClick={handleClick} 
            random={random} 
            setSaveRandom={setSaveRandom}
          />
          <section className="favourite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <FavouriteSlipsList 
              firstFavourite={firstFavourite}
              secondFavourite={secondFavourite}
              thirdFavourite={thirdFavourite}
              newAdvice={newAdvice}
              saveRandom={saveRandom}
            />
          </section>
        </>
      )}
    </section>
  )
}

export default AdviceSection
