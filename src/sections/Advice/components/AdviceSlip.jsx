function AdviceSlip({ advice, newAdvice, saveToFavourite }) {
  

  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={() => newAdvice()}>Get More Advice</button>
      <button onClick={() => saveToFavourite()}>Save to Favourites</button>
    </section>
  );
}

export default AdviceSlip