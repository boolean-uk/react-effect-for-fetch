function FavouriteSlips({ favAdvice }) {
    return (
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favAdvice.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </section>
    );
}

export default FavouriteSlips