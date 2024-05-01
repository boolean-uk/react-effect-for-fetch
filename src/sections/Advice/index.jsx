import { useState } from "react"
import { useEffect } from "react"

function AdviceSection() {
  const [random, setRandom] = useState(null)
  const [firstFavourite, setFirstFavourite] = useState(null)
  const [secondFavourite, setSecondFavourite] = useState(null)
  const [thirdFavourite, setThirdFavourite] = useState(null)

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
  
  return (
    <section>
      <h2>Advice Section</h2>
      {random && firstFavourite && secondFavourite && thirdFavourite && (
        <>
          <section key={random.slip.id} className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{random.slip.advice}</p>
            <button>Get More Advice</button>
            <button>Save to Favourties</button>
          </section>
          <section className="favourite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
              <li>{firstFavourite.slip.advice}</li>
              <li>{secondFavourite.slip.advice}</li>
              <li>{thirdFavourite.slip.advice}</li>
            </ul>
          </section>
        </>
      )}
    </section>
  )
}

export default AdviceSection
