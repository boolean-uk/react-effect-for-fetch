import React from 'react'

const FavouriteSlipsList = ({adviceData}) => {
  return (
    <ul>
        <h2>Favorite advice slips</h2>
        {adviceData.map((advice) => (
            <p>{advice.slip.advice}</p>
        ))}
    </ul>
  )
}

export default FavouriteSlipsList
