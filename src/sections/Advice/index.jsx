import { useState, useEffect } from "react"

import { AdviceSlip } from "./components/AdviceSlip";

function AdviceSection() {
  const [adviceSlip, setAdviceSlip] = useState(null);
  const [favAdvice, setFavAdvice] = useState([]);

  const fetchAdvice = async () => {
    const response = await fetch(
      `https://api.adviceslip.com/advice`
    );
    const data = await response.json();
    setAdviceSlip(data);
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleGetNewAdvice = () => {
    fetchAdvice();
  };

  const handleSaveToFavorites = () => {
    if (adviceSlip) {
      setFavAdvice((prevFavs) => [...prevFavs, adviceSlip]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {adviceSlip && <AdviceSlip
            adviceSlip={adviceSlip}
            onGetNewAdvice={handleGetNewAdvice}
            onSaveToFavorites={handleSaveToFavorites}
          />}
      </section>
      <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
        <ul>
          {favAdvice.map((fav, index) => (
              <li key={index}>{fav.slip.advice}</li> 
            ))}
        </ul>

      </section>
    </section>
  )
}

export default AdviceSection
