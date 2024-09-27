function AdviceSlip({ advice, handleSaveToFavourites, fetchNewAdvice }) {
  return (
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
  );
}
export default AdviceSlip;
