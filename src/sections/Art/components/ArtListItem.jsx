import React from 'react';
import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({ art }) {
    const { imageURL, title, artist, publicationHistory } = art
    const URL = `https://boolean-uk-api-server.fly.dev${imageURL}`

    return (
        <>
            <div className="frame">
                <img src={URL} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <PublicationHistoryList history={publicationHistory} />
        </>
    );
}
