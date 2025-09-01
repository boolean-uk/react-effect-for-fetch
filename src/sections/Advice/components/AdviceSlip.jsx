export default function AdviceSlip( { advice, newAdvice, addToFavorites } ){

  return (
    <>
      <h3>Some Advice</h3>
      <p>{ advice.slip?.advice || "....loading" }</p>
      <button onClick={ newAdvice }>Get More Advice</button>
      <button onClick={ addToFavorites }>Save to Favourties</button>
    </>
  )
}
