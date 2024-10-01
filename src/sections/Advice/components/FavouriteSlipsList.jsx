// contains a list of favorite advice slips

// save to fav

// fetch a new one

function FavoriteSlipsList({ favorites }) {
  return (
    <section className="favourite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favorites.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavoriteSlipsList