import React from 'react'
import ArtListItem from './ArtListItem'

function ArtList({artList}) {
  return (
    <ul className="art-list">
    {artList.map((artListItem,index) => (
     <ArtListItem  artListItem={artListItem} key={index} />
    ))}
    </ul>
  )
}

export default ArtList