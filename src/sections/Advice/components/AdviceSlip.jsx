import PropTypes from "prop-types";

function AdviceSlip({ advice, onRequestNew, onFavourite }) {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={() => onRequestNew()}>Get More Advice</button>
      <button onClick={() => onFavourite()}>Save to Favourties</button>
    </section>
  );
}

AdviceSlip.propTypes = {
  advice: PropTypes.string.isRequired,
  onRequestNew: PropTypes.func.isRequired,
  onFavourite: PropTypes.func.isRequired,
};

export default AdviceSlip;
