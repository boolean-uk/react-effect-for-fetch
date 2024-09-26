import React from 'react'
import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem({artItem}) {

  return (
    <>
        <li>
            <div class="frame">
                <img
                    src={`https://boolean-api-server.fly.dev/${artItem.imageURL}`}
                />
            </div>
            <h3>{artItem.title}</h3>
            <p>{artItem.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList artItem={artItem} />
        </li>  
    </>
  )
}

export default ArtListItem