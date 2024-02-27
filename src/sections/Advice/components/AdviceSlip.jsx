function AdviceSlip({ advice, addFavorite, randomAdvice }) {
  return (
    <>
      <p>{advice}</p>
      <button onClick={() => {
        randomAdvice()
      }}>Get More Advice</button>
      <button onClick={() => addFavorite(advice)}>Save to Favourties</button>
    </>
  );
}

export default AdviceSlip;
