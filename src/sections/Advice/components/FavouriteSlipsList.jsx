function FavouriteSlipsList({ favourites }) {

    return (
        <ul>
            {(favourites || []).map((slip) => (
                <li key={slip.id}>{slip.advice}</li>
            ))}
        </ul>
  );
}

export default FavouriteSlipsList;