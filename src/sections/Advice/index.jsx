import { useEffect, useState } from "react";

function AdviceSection() {


 
  const [advice, setAdvice] = useState({
    slip: {
      id:0, advice: "Don't always follow advices from the Internett"
    }
  });
  const [faveAdvice, setFaveAdvice] = useState([]);



  useEffect( () => {
    const fetchData = async () => {
      await getAdvice();
    }
    
  }, []);

  const getAdvice = async () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(setAdvice)
  }
  

  const handleFavourite = () => {
    setFaveAdvice([...faveAdvice, advice]);
  }

  return (
  <section>
    <h2>Advice Section</h2>
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice.slip.advice}</p>
      <button onClick={getAdvice}>Get More Advice</button>
      <button onClick={handleFavourite}>Save to Favourties</button>
    </section>
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {faveAdvice.map((advice, index) => (
          <li key={index}>{advice.slip.advice}</li>
        ))}
      </ul>
    </section>
  </section>
  )
}

export default AdviceSection
