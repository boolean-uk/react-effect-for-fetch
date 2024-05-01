export default function AdviceSlip({ adviceData, handleClick, handleFavourites }) {
    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            {adviceData && <p>{adviceData.slip.advice}</p>}
            <button onClick={handleClick}>Get More Advice</button>
            <button onClick={handleFavourites}>Save to Favourties</button>
        </section>
    )
}