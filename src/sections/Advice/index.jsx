import { useEffect, useState } from "react"

function AdviceSection() {
 const [advice, setAdvice] = useState([])
 const [favorites, setFavorites] = useState([])

 const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(res => setAdvice(res.slip.advice))
 }

 const addFavorite = () => {
  setFavorites([...favorites, advice])
  console.log(favorites)
 }

 useEffect(()=> {
  fetchAdvice()}, [])

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={addFavorite}>Save to Favourties</button>
      </section>

      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
        {favorites.map((favAdvice, index)=> (
            <li key={index}>{favAdvice}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
