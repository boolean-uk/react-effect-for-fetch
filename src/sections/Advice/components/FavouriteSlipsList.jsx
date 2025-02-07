import React from 'react'

function FavouriteSlipsList({adviceFavorites}) {
  return (
    <>
        <h3>Favourite Advice Slips</h3>
        <ul>
            {
                adviceFavorites.map((x, index) => (
                    <li key={index}>
                        {x}
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default FavouriteSlipsList