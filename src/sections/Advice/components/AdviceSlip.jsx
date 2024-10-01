
export function AdviceSlip({ adviceSlip, onGetNewAdvice, onSaveToFavorites }){
    return (
        <section className="advice-slip">
            <h3>Some Advice</h3>
            <p>{adviceSlip.slip.advice}</p>
            <button onClick={onGetNewAdvice}>Get More Advice</button>
            <button onClick={onSaveToFavorites}>Save to Favorites</button>
        </section>
    )
}