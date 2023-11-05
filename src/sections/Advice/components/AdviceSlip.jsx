const AdviceSlip = ({ advice, handleFavorite, getAdvice, loading }) => {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{loading ? "loading..." : advice.advice}</p>
      <button disabled={loading} onClick={getAdvice}>
        Get More Advice
      </button>
      <button onClick={() => handleFavorite(advice)}>Save to Favourties</button>
    </section>
  );
};

export default AdviceSlip;
