export const FavouriteSlipsList = ({ favourites, removeFromFavourite }) => {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourites.map((slip, index) => (
            <li onClick={() => removeFromFavourite(slip.id)} key={index}>{slip.advice}</li>
        ))}
      </ul>
    </section>
  );
}