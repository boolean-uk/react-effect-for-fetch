function FavouriteSlipsList({ favouriteSlips }) {
  if (favouriteSlips.length === 0) {
    return (
      <div>
        <h3>Your Favourite Advice Slips</h3>
        <p>No favourite slips yet. Save some advice!</p>
      </div>
    )
  }

  return (
    <div>
      <h3>Your Favourite Advice Slips</h3>
      <ul>
        {favouriteSlips.map(slip => (
          <li key={slip.id}>
            <p><strong>#{slip.id}:</strong> {slip.advice}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavouriteSlipsList