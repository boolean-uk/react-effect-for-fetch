

export default function AdviceSlip({ advice, handleNewAdvice, handleAddingFavourite }) {
    return (
        <>
        <h3>Some Advice</h3>

        <p>{advice}</p>

        <button onClick={handleNewAdvice}>Get More Advice</button>

        <button onClick={handleAddingFavourite}>Save to Favourties</button>
        
        </>
    )


}

