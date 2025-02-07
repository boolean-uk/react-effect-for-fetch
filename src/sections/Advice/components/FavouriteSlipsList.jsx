const FavouriteSlipsList = ({ favoriteAdviceSlips }) => {
  return (
    <div>
      <h2>Favourite Advice Slips</h2>
      <ul>
        {favoriteAdviceSlips.map((slip) => (
          <li key={slip}>{slip}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteSlipsList;
