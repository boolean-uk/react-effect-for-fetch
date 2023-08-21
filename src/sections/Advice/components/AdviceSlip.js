function AdviceSlip({ advice, saveFavouriteAdvice, handleSubmit }) {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice || "loading..."}</p>
      <button onClick={handleSubmit}>Get More Advice</button>
      <button onClick={saveFavouriteAdvice}>Save to Favourties</button>
    </section>
  );
}

export default AdviceSlip;
