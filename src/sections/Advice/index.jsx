import { useEffect, useState } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favAdvice, setFavAdvice] = useState([])

  useEffect(() => getAdvice(), []) 

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((item) => setAdvice(item.slip.advice));
  }

  const addToFavourites = () => {
    if (advice) {
      setFavAdvice([...favAdvice, advice])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={getAdvice}>Get More Advice</button>
        <button onClick={addToFavourites}>Save to Favourites</button>
      </section>

      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favAdvice.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection
