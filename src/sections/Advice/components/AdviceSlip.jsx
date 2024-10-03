export default function AdviceSlip({adviceSlip, getMoreAdvice, saveToFavourites}) {

    const { advice } = adviceSlip;

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button onClick={getMoreAdvice}>Get More Advice</button>
            <button onClick={saveToFavourites}>Save to Favourties</button>
        </section>
    )
}