function AdviceSlip({ advice, getAdvice, addToFavourites }) {
    return (
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={getAdvice}>Get More Advice</button>
        <button onClick={addToFavourites}>Save to Favourites</button>
      </section>
    );
}

export default AdviceSlip