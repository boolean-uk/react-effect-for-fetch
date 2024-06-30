export default function AdviceSlip({
  randomAdvice,
  setGetAdvice,
  setFavouriteAdvice,
  getAdvice,
  favouriteAdvice,
}) {
  function handleGetAdvice(event) {
    setGetAdvice(!getAdvice);
  }
  function handleAddFavourite() {
    favouriteAdvice.includes(randomAdvice)
      ? console.log("advice already included in favourites")
      : setFavouriteAdvice([...favouriteAdvice, randomAdvice]);
  }
  return (
    <section className="adivce-slip">
      <h3>Some Advice</h3>
      <p>{randomAdvice}</p>
      <button onClick={handleGetAdvice}>Get More Advice</button>
      <button onClick={handleAddFavourite}>Save to Favourties</button>
    </section>
  );
}
