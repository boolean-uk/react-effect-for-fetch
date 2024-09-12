function AdviceSlip(props) {

    const {fetchAdvice, saveToFavorites, currentAdvice} = props

    return (
      <section className="adivce-slip">
        <h3>Some Advice</h3>
        <p>{currentAdvice}</p>
        <button onClick={fetchAdvice}>Get More Advice</button>
        <button onClick={saveToFavorites}>Save to Favourites</button>
      </section>
    );
}

export default AdviceSlip