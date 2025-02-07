function adviceSlip(props) {
    const advice = props.advice

    return (
        <>
        <h3>Some Advice</h3>
        <p>{advice.advice}</p>
        <button onClick={props.getMoreAdvice}>Get More Advice</button>
        <button onClick={props.saveToFavourites}>Save to Favourties</button>
        </>
    )
}

export default adviceSlip