import { useEffect, useState } from "react"

function AdviceSection() {

  const adviceURL = 'https://api.adviceslip.com/advice'

  const [advice, setAdvice] = useState([])
  const [dataType, setDataType] = useState('')

  useEffect(() => {
    if (!dataType) {
      fetch(adviceURL)
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
    }
  }, [dataType])

  function getMoreAdvice() {
    fetch(adviceURL)
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
  }

  const [faveAdvice, setFaveAdvice] = useState([])

  function saveToFavourites() {
    if (!faveAdvice.includes(advice)) {
      setFaveAdvice([...faveAdvice, advice])
    }
    console.log(faveAdvice)
  }

 
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={getMoreAdvice}>Get More Advice</button>
        <button onClick={saveToFavourites}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {faveAdvice.map((someAdvice, index) =>
            <li key={`${someAdvice}-${index}`}>{someAdvice}</li>
          )}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
