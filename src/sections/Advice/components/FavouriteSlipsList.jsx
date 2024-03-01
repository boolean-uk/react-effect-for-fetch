function FavouriteSlipsList({ favourtites }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourtites.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavouriteSlipsList;
