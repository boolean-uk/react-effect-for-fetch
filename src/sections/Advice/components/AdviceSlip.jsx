function AdviceSlip({ advice, onGetMore, onSave }) {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={onGetMore}>Get More Advice</button>
      <button onClick={onSave}>Save to Favourites</button>
    </section>
  );
}

export default AdviceSlip;