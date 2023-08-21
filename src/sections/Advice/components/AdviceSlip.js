function AdviceSlip(props) {
    return(
        <div>
            <h3>Some Advice</h3>
            <p>{props.advice.advice}</p>
            <button onClick={() => props.setGetNew(true)}>Get More Advice</button>
            <button onClick={() => props.addToList()}>Save to Favourties</button>
        </div>
    )
}
export default AdviceSlip