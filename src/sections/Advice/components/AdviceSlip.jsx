
function AdviceSlip({adviceSlip, setRandomAdvice, addToFavourites}) {

    return (
        <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{adviceSlip.advice}</p>
        <button onClick={() => setRandomAdvice()}>Get More Advice</button>
        <button onClick={() => addToFavourites(adviceSlip)}>Save to Favourties</button>
      </section>
    )
}

export default AdviceSlip