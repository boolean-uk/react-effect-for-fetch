import React from 'react'

function FavouriteSlipsList({favouriteAdvice}) {
  return (
    <>
        <h3>Favourite Advice Slips</h3>
        <ul>{favouriteAdvice.map((advice, index) => {
            return <li key={index}>{advice.adviceData.slip.advice}</li>
        })}
        </ul>
    </>
  )
}

export default FavouriteSlipsList