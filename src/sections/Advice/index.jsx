import { useState } from "react";
function AdviceSection({ advice, fetchNewAdvice }) {
  const [favouriteAdvice, setFavouriteAdvice] = useState([]);

  const handleSaveToFavourites = () => {
    if (
      advice !== null &&
      !favouriteAdvice.some(
        (existingAdvice) => existingAdvice.slip.id === advice.slip.id
      )
    ) {
      setFavouriteAdvice((prevFavourites) => [...prevFavourites, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        {advice !== null ? (
          <>
            <p>{advice.slip.advice}</p>
            <button onClick={fetchNewAdvice}>Get More Advice</button>
            <button onClick={handleSaveToFavourites}>Save to Favourties</button>
          </>
        ) : (
          <li>No advice available</li>
        )}
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        {favouriteAdvice !== null ? (
          <ul>
            {favouriteAdvice.map((advice, index) => (
              <li key={index}>{advice.slip.advice}</li>
            ))}
          </ul>
        ) : (
          <li>No favourite advice yet.</li>
        )}
      </section>
    </section>
  );
}
/*<section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>Always the burrito.</p>
        <button>Get More Advice</button>
        <button>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          <li>Measure twice, cut once.</li>
          <li>Don't let the bastards grind you down.</li>
          <li>Always the burrito.</li>
        </ul>
      </section>
    </section>*/

export default AdviceSection;
