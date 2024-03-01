import React, { useEffect, useState } from 'react'

export default function FavouriteSlipsList({favouriteList}) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {favouriteList.length === 0 ? (
          <p>No favourites here...</p>
        ) : (
          favouriteList.map((advice, index) => (
            <li key={index}>{advice}</li>
          ))
        )}
      </ul>
    </section>
  )
}
