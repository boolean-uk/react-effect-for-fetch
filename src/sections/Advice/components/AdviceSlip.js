function AdviceSlip({ advice, getMoreAdvice, addToFavorites }) {
    return (
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={getMoreAdvice}>Get More Advice</button>
        <button onClick={() => addToFavorites(advice)}>Save to Favorites</button>
      </section>
    )
  }
  
  export default AdviceSlip