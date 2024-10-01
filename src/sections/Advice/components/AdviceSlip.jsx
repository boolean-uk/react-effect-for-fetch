
function AdviceSlip({ advice, onFetchAdvice, onAddToFavourites }) {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={onFetchAdvice}>Get More Advice</button>
      <button onClick={onAddToFavourites}>Save to Favourites</button>
    </section>
  );
}

export default AdviceSlip;
