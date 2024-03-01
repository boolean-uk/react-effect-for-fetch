import { useState, useEffect } from 'react'

import AdviceSlip from './components/AdviceSlip'

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favouriteSlips, setFavouriteSlips] = useState([])
  const [adviceToggle, setAdviceToggle] = useState(false)

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice",
      {cache: "no-store"})  // Prevents result from being cached, resulting in same response
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      console.log(adviceToggle + advice)
  }, [adviceToggle])

  const handleClick = (event) => {
    if(event.target.value === "getMore")
      setAdviceToggle(!adviceToggle)
    if(event.target.value === "favourite") {
      setFavouriteSlips([...favouriteSlips, advice])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        {advice !== "" &&
        <p>{advice}</p>
        }
        <button value="getMore" onClick={handleClick}>Get More Advice</button>
        <button value="favourite" onClick={handleClick}>Save to Favourites</button>
    </section>
      <section className="favourtite-slips-list">
        <ul>
        {favouriteSlips.map((favourite, index) => (
          <li key={index}>
            {favourite}
          </li>
        ))
        }
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
