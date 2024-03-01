import React from 'react'
import ArtListItem from './ArtListItem'

function ArtList({artList}) {
  return (
    <>
    <ul className="art-list">
        {artList.map((artist, index) =>{
            return <ArtListItem key={index} art={artist}/>
        })}

    </ul>
    </>
  )
}

export default ArtList