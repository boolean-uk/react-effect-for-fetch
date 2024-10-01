

export default function AdviceSlip({adviceItem : {id, advice}, addTofavouriteList, newAdvice}) {
    return (
        <section>
            <h2>Advice Section</h2>
            <section className="adivce-slip">
                <h3>Some Advice</h3>
                <p>{advice}</p>
                <button onClick={newAdvice}>Get More Advice</button>
                <button onClick={addTofavouriteList}>Save to Favourties</button>
            </section>
        </section>

    )
}