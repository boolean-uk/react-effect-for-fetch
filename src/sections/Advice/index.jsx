import { useState, useEffect } from "react";

function AdviceSection() {

  const [advice, setAdvice] = useState(null)
  const [favAdvices, setFavAdvices] = useState([])
  const address = 'https://api.adviceslip.com/advice'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch(address)
      .then(res => res.json())
      .then(data => setAdvice(data))
  }

  const saveToFavorites = () => {
    if (advice && !favAdvices.includes(advice))
    {
      setFavAdvices(prev => [...prev, advice])
    }
  }

  if (advice)
  {
    return (
      <section>
        <h2>Advice Section</h2>
        <section className="adivce-slip">
          <h3>Some Advice</h3>
          <p>{advice.slip.advice}</p>
          <button
            onClick={fetchData}
          >Get More Advice</button>
          <button
            onClick={saveToFavorites}
          >Save to Favourties
          </button>
        </section>
        <section className="favourtite-slips-list">
          <h3>Favourite Advice Slips</h3>
          <ul>
            {
              favAdvices ? favAdvices.map((a, i) => {
                return (<li key={i}>{a.slip.advice}</li>)
              }) : <p>No advices favorited</p>
            }
          </ul>
        </section>
      </section>
    )

  }
}

export default AdviceSection
