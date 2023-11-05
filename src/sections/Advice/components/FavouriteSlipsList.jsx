const FavouriteSlipsList = ({ favorite }) => {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favorite.map((item) => (
          <li key={item.id}>{item.advice}</li>
        ))}
      </ul>
    </section>
  );
};

export default FavouriteSlipsList;
