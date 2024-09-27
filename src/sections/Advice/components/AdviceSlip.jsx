function AdviceSlip({randomAdvice, addToFavorite, generateRandomAdvice}){
    return (
        <>
        <h2>Advice Section</h2>
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{randomAdvice.slip.advice}</p>
            <button onClick={() => generateRandomAdvice()}>Get More Advice</button>
            <button onClick={() => addToFavorite()}>Save to Favourties</button>
        </section>  
        </>
    )
}

export default AdviceSlip