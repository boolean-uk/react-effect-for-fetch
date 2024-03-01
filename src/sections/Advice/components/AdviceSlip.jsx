function AdviceSlip(props) {
    const {advice, handleClick} = props

    return(
    <section className="advice-slip">
        <h3>Some Advice</h3>
        {advice !== "" &&
        <p>{advice}</p>
        }
        <button value="getMore" onClick={handleClick}>Get More Advice</button>
        <button value="favourite" onClick={handleClick}>Save to Favourites</button>
    </section>
    )
}

export default AdviceSlip