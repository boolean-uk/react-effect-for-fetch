function FavouriteSlipsList({ favouriteSlips }) {
  return (
    <section className="favourite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favouriteSlips.map((slip, index) => (
          <li key={index}>{slip}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavouriteSlipsList;