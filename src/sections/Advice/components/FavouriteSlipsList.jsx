import React from 'react';

function FavoriteSlipsList({ favorites }) {
  return (
    <section className="favorite-slips-list">
      <h3>Favorite Advice Slips</h3>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavoriteSlipsList;
