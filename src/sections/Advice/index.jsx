import { useEffect, useState } from "react";

function AdviceSection() {
  const [randomAdvice, setRandowAdvice] = useState("");
  const [favourtiteAdvice, setFavouriteAdvice] = useState([]);
  const [getAdvice, setGetAdvice] = useState(false);
  console.log("random Advice Data", randomAdvice);
  console.log("favourite Advice", favourtiteAdvice);
  console.log("get Advice", getAdvice);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setRandowAdvice(data.slip.advice));
  }, [getAdvice]);

  function handleAddFavourite() {
    favourtiteAdvice.includes(randomAdvice)
      ? console.log("advice already included in favourites")
      : setFavouriteAdvice([...favourtiteAdvice, randomAdvice]);
  }

  function handleGetAdvice(event) {
    setGetAdvice(!getAdvice);
  }
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{randomAdvice}</p>
        <button onClick={handleGetAdvice}>Get More Advice</button>
        <button onClick={handleAddFavourite}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourtiteAdvice.map((advice, index) => (
            <li key={index}>{advice}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
