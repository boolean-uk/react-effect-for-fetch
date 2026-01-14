import { useEffect, useState } from "react"

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice"
  const fetchAdvice = async () => {
              const response = await fetch (url);
              const jsonData = await response.json();
              setAdvice(jsonData);
          }
  const [advice, setAdvice] = useState()
  useEffect(() => {
    fetchAdvice();
        }, [])
    
  const [favouriteAdvice, setFavouriteAdvice] = useState([])
  const addAdvice = () => {
    setFavouriteAdvice( favouriteAdvice.includes(advice.slip.advice) ? [...favouriteAdvice]: [...favouriteAdvice, advice.slip.advice] )
    console.log(advice.slip.advice)

  }
  return (
    
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice ? advice.slip.advice: "Loading..."}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={addAdvice}>Save to Favourties</button>
      </section>
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favouriteAdvice.map((favourite, index) => (
            <li key={index}>{favourite}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
