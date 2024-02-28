export const AdviceSlip = ({ slip, changeSlip, addToFavourite }) => {
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{slip.advice}</p>
      <button
        onClick={changeSlip}
      >Get More Advice</button>
      <button 
        onClick={() => addToFavourite(slip)}
      >Save to Favourties</button>
    </section>
  );
}