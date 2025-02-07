import React from 'react'
import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem({artListItem}) {
  return (

    <li >
        <div className="frame">
            <img
            src={artListItem.imageURL}
            />
        </div>
        <h3>{artListItem.title}</h3>
        <p>Artist: {artListItem.artist}</p>
        <h4>Publication History:</h4>
        <ul>
            <PublicationHistoryList historyList={artListItem.publicationHistory}/>
        </ul>
    </li>
  )
}

export default ArtListItem