import PropTypes from "prop-types";
function AdviceSlip(props) {
  function onSaveFav() {
    props.onSaveFav(props.advice);
  }
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{props.advice}</p>
      <button onClick={props.newAdvice}>Get More Advice</button>
      <button onClick={onSaveFav}>Save to Favourties</button>
    </section>
  );
}
AdviceSlip.propTypes = {
  advice: PropTypes.string.isRequired,
  newAdvice: PropTypes.func.isRequired,
};
export default AdviceSlip;
