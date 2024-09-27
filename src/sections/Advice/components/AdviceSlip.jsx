function AdviceSlip({advice, getAdvice, addToFavourites}){
    return (
        <section className="adivce-slip">
        <h3>Some Advice</h3>
        {(advice.length !== 0) && <p>{advice.slip.advice}</p>}
        <button onClick={getAdvice}>Get More Advice</button>
        <button onClick={addToFavourites} disabled={advice.length === 0}>Save to Favourites</button>
      </section>
    )
}

export default AdviceSlip