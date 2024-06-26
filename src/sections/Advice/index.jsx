import { useEffect, useState } from "react"

function AdviceSection() {

  const [advice, setAdvice] = useState([])
  const [favourites, setFavourites] = useState([])

    useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => setAdvice(json.slip))
  }, [])
  
  const addToFavourites = () => {
    setFavourites([
      ...favourites, {
      ...advice
    }])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice.advice}</p>
        <button onClick={setAdvice}>Get More Advice</button>
        <button onClick={addToFavourites}>Save to Favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((favourite) =>
            <li key={favourite.id}>{favourite.advice}</li>)}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
