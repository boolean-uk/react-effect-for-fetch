function AdviceSlip({ advice, fetchAdvice, addFavouriteSlip }) {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Get Another Advice</button>
      <button onClick={addFavouriteSlip}>Save to Favourites</button>
    </section>
  );
}

export default AdviceSlip;
