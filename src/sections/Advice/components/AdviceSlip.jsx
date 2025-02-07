function AdviceSlip({ advice, getRandomAdvice, saveToFavourties }) {
  return (
    <>
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={getRandomAdvice}>Get More Advice</button>
      <button onClick={saveToFavourties}>Save to Favourties</button>
    </>
  );
}

export default AdviceSlip;
