import React from 'react'

function FavouriteSlipsList({favorites}) {
  return (
    <section class="favourtite-slips-list">
    <h3>Favourite Advice Slips</h3>
    <ul>
        {
        favorites.map((fave, i) => (
            <li key={i}>{fave.slip.advice}</li>
        ))
        }
    </ul>
  </section>
  )
}

export default FavouriteSlipsList