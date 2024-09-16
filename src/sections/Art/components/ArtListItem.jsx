import React from 'react'
import PublicationHistoryList from './PublicationHistoryList'   


export default function ArtListItem({artItem}) {
    return (
        <li>
            <div className='frame'>
                <img src={"https://boolean-api-server.fly.dev" + artItem.imageURL} />
            </div>
            <h3>{artItem.title}</h3>
            <p>Artist: {artItem.artist}</p>
            <PublicationHistoryList list={artItem.publicationHistory} />
        </li>
    )
}