import { useEffect, useState } from "react"

function AdviceSection() {

  const adviceURL = 'https://api.adviceslip.com/advice'

  const [advice, setAdvice] = useState([])
  const [dataType, setDataType] = useState('')

  useEffect(() => {
    fetch(adviceURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  })
 
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>Always the burrito.</p>
        <button>Get More Advice</button>
        <button>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
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
