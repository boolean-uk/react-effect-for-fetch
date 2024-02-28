export default function AdviceSlip({ adviceSlip, setShouldFetch, shouldFetch, addToFavourites }) {
    return (
        <section className="adivce-slip">
            {
                adviceSlip ? (
                    <div>
                        <h3>{adviceSlip.slip.advice}</h3>
                        <button onClick={() => setShouldFetch(!shouldFetch)}>Get More Advice</button>
                        <button onClick={() => addToFavourites()}>Save to Favourties</button>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </section>
    )
}