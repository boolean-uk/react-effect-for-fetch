function AdviceSlip(props) {
  return (
    <>
      {props.currentAdvice && <p>{props.currentAdvice.advice}</p>}
      <button onClick={props.getNewAdvice}>Get More Advice</button>
      <button onClick={props.saveAsFavourite}>Save to Favourties</button>
    </>
  );
}

export default AdviceSlip;
