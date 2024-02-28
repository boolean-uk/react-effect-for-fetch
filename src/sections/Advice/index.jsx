import { useState, useEffect } from 'react'

function AdviceSection() {

  const [advice, setAdvice] = useState([])
  const [currentAdvice, setCurrentAdvice] = useState({slip: {advice: "Load faster!!!"}})


  let url = "https://api.adviceslip.com/advice";

  function newAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(setCurrentAdvice);
  }

  function addAdvice(){
    setAdvice([...advice, currentAdvice.slip.advice])
  }

  useEffect(() => {

    newAdvice();

  }, []);


  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{currentAdvice.slip.advice}</p>
        <button onClick={newAdvice}>Get More Advice</button>
        <button onClick={addAdvice}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">Favorite Advice Slips<ul>
        {advice.map((elm) =>
          <li> {elm} </li>
        )}
      </ul></section>
    </section>
  )
}

export default AdviceSection