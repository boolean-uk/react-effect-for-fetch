function AdviceSlip({ advice, onGetNewAdvice, onSaveToFavourites }) {
  if (!advice) {
    return <p>Loading advice...</p>
  }

  return (
    <div>
      <h3>Some Advice For You:</h3>
      <p>{advice.advice}</p>
      <button onClick={onGetNewAdvice}>Get Another Advice</button>
      <button onClick={onSaveToFavourites}>Save to Favourites</button>
    </div>
  )
}

export default AdviceSlip