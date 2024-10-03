import React from 'react';
import PublicationHistoryList from './PublicationHistoryList';

export default function ArtListItem({ artwork }) {
    const { imageURL, title, artist, publicationHistory } = artwork;
    return (
        <li>
            <div className="frame">
                <img src={`https://boolean-uk-api-server.fly.dev${imageURL}`}/>
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList history={publicationHistory} />
        </li>
    )
}