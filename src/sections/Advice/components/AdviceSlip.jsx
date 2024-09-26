

function AdviceSlip ({ advice, addToFavorites, getAdvice }) {
    return (
        <section className="advice-slip">
        <h3>Some Advice :</h3>
        <p>{advice === null ? "" : advice.slip.advice}</p>
        <button onClick={()=>getAdvice()}>Get More Advice</button>
        <button onClick={()=>addToFavorites(advice)}>Save to Favourites</button>
    </section>
    )
}

export default AdviceSlip