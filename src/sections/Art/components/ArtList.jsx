import React from 'react'
import ArtListItem from './ArtListItem';

function ArtList({props}) {
    const artList = props;

  return (
    <>
        <ul class="art-list">{artList.map((artItem, index) => {
            return <ArtListItem key={index} artItem={artItem}/>
            })}
        </ul>
    </>
  )
}

export default ArtList