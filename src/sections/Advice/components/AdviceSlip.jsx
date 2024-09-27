import PropTypes from "prop-types";

export default function AdviceSlip({ advice, newAdvice, likeAdvice }) {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={newAdvice}>Get More Advice</button>
      <button onClick={likeAdvice}>Save to Favourties</button>
    </section>
  );
}

AdviceSlip.propTypes = {
    advice: PropTypes.string
};
