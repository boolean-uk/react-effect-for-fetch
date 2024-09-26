function AdviceSlip(props) {
  const handleSaveToFavorites = (advice) => {
    props.setFavorites([...props.favourtites, advice]);
  };

  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{props.adviceSlip}</p>
      <button onClick={() => props.setWantNewAdvice(true)}>
        Get More Advice
      </button>
      <button onClick={() => handleSaveToFavorites(props.adviceSlip)}>
        Save to Favourties
      </button>
    </section>
  );
}

export default AdviceSlip;
