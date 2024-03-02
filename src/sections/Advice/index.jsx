import { useState } from 'react';


const placeholderAdvices = [
  "Always the burrito.",
  "Measure twice, cut once.",
  "Do not let the bastards grind you down.",
  "Keep it simple.",
  "Take breaks.",
  "Stay curious.",
];

function AdviceSection() {
  const [currentAdvice, setCurrentAdvice] = useState('');
  const [favourites, setFavourites] = useState([]);

  const fetchAdvice = () => {
    const randomAdvice = placeholderAdvices[Math.floor(Math.random() * placeholderAdvices.length)];
    setCurrentAdvice(randomAdvice);
  };

  const saveToFavourites = () => {
    if (!favourites.includes(currentAdvice) && currentAdvice) {
      setFavourites([...favourites, currentAdvice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{currentAdvice || "Click 'Get More Advice' to receive advice."}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveToFavourites} disabled={!currentAdvice}>Save to Favourites</button>
      </section>
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.map((advice, index) => (
            <li key={index}>{advice}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
