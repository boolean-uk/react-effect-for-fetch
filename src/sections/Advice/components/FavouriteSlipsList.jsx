import React from 'react'

export default function FavouriteSlipsList(props) {
    const{favAdvice} = props;
  return (
    <div>
       <h3>Favourite Advice Slips</h3>
       <ul className='fav-list'>
            {favAdvice.map((a, index) => (
                <li key={index}> {a.advice} </li>
            ))}
       </ul>

    </div>
  )
}
