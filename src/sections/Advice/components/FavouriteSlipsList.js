import React from 'react'

function FavouriteSlipsList({ favouriteSlips }) {

  return (
    <div className="favourite-slip-list">
      <h2>Favourite Advice Slips</h2>
      <ul>
        {favouriteSlips.map((slip, index) => (
          <li key={index}>{slip}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteSlipsList; 