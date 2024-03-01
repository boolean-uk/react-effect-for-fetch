import React from 'react'
import AdviceSlip from './AdviceSlip'

function FavouriteSlipsList({adviceFavoriteList}) {
  return (

    <ul>
        {adviceFavoriteList.map((item, index) =>{
            return <AdviceSlip key={index} advice={item}/>
        } )}
    </ul>

  )
}

export default FavouriteSlipsList