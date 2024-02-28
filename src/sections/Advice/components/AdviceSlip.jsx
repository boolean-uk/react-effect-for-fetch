import { useEffect, useState } from "react";

export default function AdviceSlip({ saveAdvice }) {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState(undefined);

  const fetchAdvices = async () => {
    setLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const slip = await response.json();
    setLoading(false);
    setAdvice(slip);
  };

  useEffect(() => {
    fetchAdvices();
  }, []);

  return (
    <>
      <h3>Some Advice</h3>
      {loading === true && <p>Loading advice...</p>}
      {advice && <p>{advice.slip.advice}</p>}
      <button onClick={fetchAdvices}>Get More Advice</button>
      <button onClick={() => saveAdvice(advice.slip.advice)}>
        Save to Favourties
      </button>
    </>
  );
}
