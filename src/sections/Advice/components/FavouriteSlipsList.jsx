
import React from "react";

function FavouriteSlipsList({ favoriteAdvices }) {
  return (
    <section className="favourite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favoriteAdvices.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </section>
  );
}

export default FavouriteSlipsList;
