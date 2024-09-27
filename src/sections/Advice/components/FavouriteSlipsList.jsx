function FavouriteSlipsList({ favoriteSlips }) {
  return (
    <section className="favourite-slips-list">
      <h3>Your Favorite Advice</h3>
      <ul>
        {favoriteSlips.map((slip, index) => (
          <li key={index}>{slip}</li>
        ))}
      </ul>
    </section>
  )
}

export default FavouriteSlipsList
