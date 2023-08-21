function FavouriteSlip({ favourtiteAdvice }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favourtiteAdvice.map((advice, index) => {
          return <li key={index}>{advice}</li>;
        })}
      </ul>
    </section>
  );
}

export default FavouriteSlip;
