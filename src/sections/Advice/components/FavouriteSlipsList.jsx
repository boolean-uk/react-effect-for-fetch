export default function FavouriteSlipsList({ favourites }) {
    return (
      <ul>
        {favourites.map(fav => (
          <li key={fav.id}>{fav.advice}</li>
        ))}
      </ul>
    );
  }
  