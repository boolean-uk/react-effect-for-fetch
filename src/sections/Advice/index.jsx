import { useEffect, useState } from "react";

function AdviceSection() {
  const baseURL = "https://api.adviceslip.com/advice";
  const [newAdvice, setNewAdvice] = useState(0);
  const [adviceData, setAdviceData] = useState(null);
  const [saveAdvice, setSaveAdvice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseURL}?_=${Date.now()}`);
      const jsonData = await response.json();
      setAdviceData(jsonData);
    };
    fetchData();
  }, [newAdvice]);

  const handleGetAdvice = () => {
    setNewAdvice(newAdvice + 1);
    setAdviceData(null);
  };

  const handleSaveAdvice = () => {
    setSaveAdvice([...saveAdvice, adviceData.slip.advice]);
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <h3>Some Advice</h3>

        {adviceData ? <p>{adviceData.slip.advice}</p> : <p>Loading...</p>}

        <button onClick={handleGetAdvice}>Get More Advice</button>
        <button onClick={handleSaveAdvice}>Save to Favourties</button>
      </section>

      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {saveAdvice.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
