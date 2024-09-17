import { useState, useEffect } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState({})
  const [favAdvice, setFavAdvice] = useState([])

  function fetchData() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then((result) => setAdvice(result))
  }

  useEffect(() => {
    fetchData()
  }, []);

  const saveAdviceToFavs = () => {
    setFavAdvice([...favAdvice, advice])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice.slip.advice}</p>
        <button onClick={fetchData}>Get More Advice</button>
        <button onClick={saveAdviceToFavs}>Save to Favourties</button>
      </section>

      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favAdvice.map((singleAdvice, index) => (
            <li
              key={index}>
              {singleAdvice.slip.advice}
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
