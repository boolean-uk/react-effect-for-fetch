import { useState, useEffect } from "react";

export default function AdviceSlip(props) {
  const [advice, setAdvice] = useState("");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (toggle) {
      fetch(`https://api.adviceslip.com/advice`)
        .then((response) => response.json())
        .then((data) => {
          setAdvice(data.slip.advice);
          setToggle(false);
        });
    }
  }, [toggle]);

  const handleAddToFavourites = () => {
    props.addToFavourites(advice);
  };

  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={() => setToggle(true)}>Get More Advice</button>
      <button onClick={handleAddToFavourites}>Save to Favourities</button>
    </section>
  );
}
