

function AdviceSlip({ advice, onClick, onFavourite }) {
    
    return (
        <>
        <h3>Some advice</h3>
        <p>{advice}</p>
        <button onClick={onClick}>Get more advice</button>
        <button value={advice} onClick={onFavourite}>Add to favourites</button>
        </>
    )
}

export default AdviceSlip