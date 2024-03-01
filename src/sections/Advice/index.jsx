import { useEffect, useState } from "react";

const initAdvice = "Opinions are like arseholes, everyone has one.";

function AdviceSection() {
  const [data, setData] = useState();
  const [advice, setAdvice] = useState(initAdvice);
  const [favourite, setFavourite] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(setData);
  }, [update]);

  const handleGetMoreAdvices = (e) => {
    e.preventDefault();

    setUpdate(update + 10);
    setAdvice(data.slip.advice);
  };

  const handleFavourite = (e) => {
    e.preventDefault();
    setFavourite([...favourite, advice]);

    setUpdate(update + 10)
    setAdvice(data.slip.advice)
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={handleGetMoreAdvices}>Get More Advice</button>
        <button onClick={handleFavourite}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourite.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
