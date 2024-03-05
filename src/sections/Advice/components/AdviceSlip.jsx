export default function AdviceSlip(props) {

    const { advice, fetchAdvice, addFavourites, } = props

    return (
      <section className="adivce-slip">
        <h2>Some Advice</h2>
        <p>{advice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={addFavourites}>Save to Favourites</button>
      </section>
    )
}
