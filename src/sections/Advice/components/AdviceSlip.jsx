import { useState, useEffect } from "react";

const AdviceSlip = ({ setFavoriteAdviceSlips }) => {
  const [advice, setAdvice] = useState("");

  const handleSaveToFavourites = () => {
    setFavoriteAdviceSlips((prev) => [...prev, advice]);
  };
  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  };
  const handleGetMoreAdvice = () => {
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={handleGetMoreAdvice}>Get More Advice</button>
      <button onClick={handleSaveToFavourites}>Save to Favourites</button>
    </>
  );
};

export default AdviceSlip;
