import { useState, useEffect } from "react";

export default function AdviceSection() {
  const [advice, setAdvice] = useState(null);
  const [favoriteAdvice, setFavoriteAdvice] = useState([]);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const saveToFavorite = () => {
    setFavoriteAdvice((prev) => [...prev, advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      {advice && (
        <section className="adivce-slip">
          <h3>Some Advice</h3>
          <p>{advice.advice}</p>
          <button onClick={fetchAdvice}>Get More Advice</button>
          <button onClick={saveToFavorite}>Save to Favourties</button>
        </section>
      )}
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favoriteAdvice.map((fav, index) => (
            <li key={index}>{fav.advice}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
