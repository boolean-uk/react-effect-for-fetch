
function AdviceSlip({ newAdvice, saveAdvice, currentAdvice }) {
    return (
        <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{currentAdvice.advice}</p>
        <button onClick={newAdvice}>Get More Advice</button>
        <button onClick={saveAdvice}>Save to Favourties</button>
      </section>
    )
}

export default AdviceSlip
