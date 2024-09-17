const AdviceSlip = ({ advice, refetch, saveToFavourites }) => {
    return (
        <>
            <h3>Some Advice</h3>
                <p>{advice.advice}</p>
                <button onClick={() => refetch()} >Get More Advice</button>
            <button onClick={() => saveToFavourites()}>Save to Favourties</button>
        </>
    )
}

export default AdviceSlip;