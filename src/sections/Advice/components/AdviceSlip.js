function AdviceSlip(props) {
    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{props.advice}</p>
            <button onClick={props.drawAgain}>Get More Advice</button>
            <button onClick={props.saveAdvice}>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip