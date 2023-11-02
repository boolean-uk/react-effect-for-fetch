export default function AdviceSlip({ advice, getMoreAdvice, addToFav }) {
    return (
        <>
         <h3>Some Advice:</h3>
         <p>{advice}</p>
         <button onClick={() => getMoreAdvice()}>Get More Advice</button>
         <button onClick={() => addToFav()}>Save to Favourites</button>
        </>
    )
}