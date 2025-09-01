const AdviceSlip = ({advice, fetchAdvice, saveToFavourites}) => {
    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice}</p>
            <button onClick={fetchAdvice}>Get More Advice</button>
            <button onClick={saveToFavourites}>Save to Favourites</button>
        </section>
    )
}
export default AdviceSlip;