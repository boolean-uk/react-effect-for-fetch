function FavouriteSlipsList({ favouriteAdvice }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      {favouriteAdvice !== null ? (
        <ul>
          {favouriteAdvice.map((advice, index) => (
            <li key={index}>{advice.slip.advice}</li>
          ))}
        </ul>
      ) : (
        <li>No favourite advice yet.</li>
      )}
    </section>
  );
}
export default FavouriteSlipsList;
