// https://api.adviceslip.com/
// https://api.adviceslip.com/advice

import { useEffect, useState } from "react";

function AdviceSlip() {
  const [advice, setAdvice] = useState([]);
  const [favAdvice, setFavAdvice] = useState([]);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip.advice))
      .catch((error) => console.error("Error fetching advice:", error));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const addToFavorites = () => {
    if (advice && !favAdvice.includes(advice)) {
      setFavAdvice([...favAdvice, advice]);
    }
  };

  return (
    <div>
      <h2>Advice Slip</h2>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Get New Advice</button>
      <button onClick={addToFavorites}>Add to Favorites</button>

      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favAdvice.map((fav, index) => (
            <li key={index}>{fav}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdviceSlip;
