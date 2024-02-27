import { useEffect, useState } from "react";
function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const ADVICE_ENDPOINT = `https://api.adviceslip.com/advice`;

  useEffect(() => {
    console.log(
      "Running my effect only the first time the component is rendered; note: dependency array is empty []..."
    );
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setLoading(true);
    fetch(ADVICE_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        console.log("received data:", data);
        setAdvice(data.slip.advice);
        setLoading(false);
      });
  };

  const handleGetAdvice = () => {
    fetchAdvice();
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        {loading ? <p>Loading...</p> : <p>{advice}</p>}
        <button onClick={handleGetAdvice}>Get More Advice</button>
        <button>Save to Favourites</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          <li>Measure twice, cut once.</li>
          <li>Don't let the bastards grind you down.</li>
          <li>Always the burrito.</li>
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
