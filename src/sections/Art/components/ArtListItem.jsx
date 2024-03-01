import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ art, index, apiUrl }) {
    return (
        <li key={index}>
            <div className='frame'>
                <img src={`${apiUrl}/${art.imageURL}`} />
            </div>
            <h2>{art.title}</h2>
            <h3>Artist: {art.artist}</h3>
            <h4>Publication History:</h4>
            <PublicationHistoryList publicationHistory={art.publicationHistory} />
        </li>
    )
}

export default ArtListItem