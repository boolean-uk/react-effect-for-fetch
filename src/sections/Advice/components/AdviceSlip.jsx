const AdviceSlip = ({ advice, fetchAdvice, saveToFavourites }) => {
  return (
    <section className="advice-slip">
      <h3>Advice Slip</h3>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Get More Advice</button>
      <button onClick={saveToFavourites}>Save to Favourites</button>
    </section>
  );
};

export default AdviceSlip;
