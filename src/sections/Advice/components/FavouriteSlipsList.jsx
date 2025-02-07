function FavouriteSlipsList({ favourites }) {
  return (
    <>
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourites.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </>
  );
}

export default FavouriteSlipsList;
