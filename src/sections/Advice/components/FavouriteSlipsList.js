function FavoriteSlipsList({ favorites }) {
  return (
    <section className="favorite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favorites.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </section>
  )
}

export default FavoriteSlipsList