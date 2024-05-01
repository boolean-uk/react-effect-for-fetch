export default function AdviceSlip(props) {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{props.advice?.slip?.advice}</p>
      <button
        onClick={() => props.setGetAdviceClicked(!props.getAdviceClicked)}
      >
        Get More Advice
      </button>
      <button
        onClick={() =>
          props.setFavourties([...props.favourties, props.advice?.slip?.advice])
        }
      >
        Save to Favourties
      </button>
    </section>
  );
}
