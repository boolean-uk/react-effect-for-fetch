import { useState, useEffect } from "react"

function AdviceSection() {
  const [advice, setAdvice] = useState("")
  const [favourites, setFavorites] = useState([])

  function GetAdvice(){
    fetch("	https://api.adviceslip.com/advice", {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => (setAdvice(data.slip.advice)))
  }

  function AddAdvice(){
    if (!favourites.includes(advice)){
      setFavorites([...favourites,advice])
    }
  }

  useEffect(() => {
    GetAdvice()
  }, [])
  console.log(favourites)
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={() => GetAdvice()}>Get More Advice</button>
        <button onClick={AddAdvice}>Save to Favourties</button>
      </section>    
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((f, index) => (
            <li key={index}>{f}</li>
          ))}          
        </ul>
      </section>  
    </section>
  )
}

export default AdviceSection
