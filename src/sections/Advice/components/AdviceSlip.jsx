function AdviceSlip(props) {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{props.advice}</p>
      <button onClick={props.refreshAdvice}>Get More Advice</button>
      <button onClick={props.saveToFavorite}>Save to Favourties</button>
    </section>
  );
}
export default AdviceSlip;
