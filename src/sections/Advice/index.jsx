import { useState, useEffect } from "react"

const URL = "https://api.adviceslip.com/advice"
function AdviceSection() {
  const [advice, setAdvice] = useState([])
  const [favourites, setFavourites] = useState([])

  const getAdvice = (e) => {
    fetch(URL, {}).then((reponse) => {
      return reponse.json();
    }).then((jsonData) => {
      setAdvice(jsonData)
    })
  }
  
  const addToFavourites = (e) =>{
    favourites.push(advice)
    setFavourites([...favourites])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        {(advice.length !== 0) && <p>{advice.slip.advice}</p>}
        <button onClick={getAdvice}>Get More Advice</button>
        <button onClick={addToFavourites} disabled={advice.length === 0}>Save to Favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((item, index) =>{
            return(
              <li>{item.slip.advice}</li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
