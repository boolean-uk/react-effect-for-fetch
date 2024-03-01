import React from 'react'

function FavouriteSlipsList({savedAdvice}) {
  return (
    <section className="favourtite-slips-list">
    <h3>Favourite Advice Slips</h3>
    <ul>
    {savedAdvice.map((item, i) => (
       <li key={i}>{item}</li>
      ))}
    </ul>
  </section>
  )
}

export default FavouriteSlipsList