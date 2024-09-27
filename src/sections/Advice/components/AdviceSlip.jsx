function AdviceSlip({ advice, onFetchMore, onSaveToFavorites }) {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={onFetchMore}>Get More Advice</button>
      <button onClick={onSaveToFavorites}>Save to Favorites</button>
    </section>
  )
}

export default AdviceSlip
