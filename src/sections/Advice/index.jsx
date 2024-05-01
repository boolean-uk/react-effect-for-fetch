import { useState } from "react"
import { useEffect } from "react"

function AdviceSection() {
  const [random, setRandom] = useState(null)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(setRandom)
  }, [])
  
  return (
    <section>
      <h2>Advice Section</h2>
      {random && (
        <section key={random.slip.id} className="adivce-slip">
          <h3>Some Advice</h3>
          <p>{random.slip.advice}</p>
          <button>Get More Advice</button>
          <button>Save to Favourties</button>
        </section>
      )}
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          <li>Measure twice, cut once.</li>
          <li>Don't let the bastards grind you down.</li>
          <li>Always the burrito.</li>
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
