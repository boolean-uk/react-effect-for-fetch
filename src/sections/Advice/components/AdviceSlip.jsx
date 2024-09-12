import { useState, useEffect } from "react";
function AdviceSlip() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(1);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`, { cache: "no-store" })
      .then((response) => response.json())
      .then((item) => setAdvice(item.slip));
  }, [count]);

  console.log({ advice });

  const handleOnClick = () => {
    setCount(count + 1);
  };

  const handleFavourites = () => {
    if (favourites.includes(advice.advice)) {
      return;
    }
    setFavourites([...favourites, advice.advice]);
  };

  console.log(favourites);
  return (
    <div>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice.advice}</p>
        <button onClick={handleOnClick}>Get More Advice</button>
        <button onClick={handleFavourites}>Save to Favourties</button>
      </section>

      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default AdviceSlip;
