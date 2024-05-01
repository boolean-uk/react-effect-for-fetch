import { useState, useEffect } from "react";


export default function AdviceSlip( {setFavouriteAdvice, favouriteAdvice}) {
    const [advice, setAdvice] = useState()

  async function getAdvice() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const json = await data.json();
    setAdvice(json)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice?.slip.advice}</p>
      <button onClick={getAdvice}>Get More Advice</button>
      <button onClick={() => {setFavouriteAdvice([...favouriteAdvice, advice.slip.advice])}}>Save to Favourties</button>
    </section>
  );
}
