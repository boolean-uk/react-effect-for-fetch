import PublicationHistoryList from "./PublicationHistoryList";

export default function ArtListItem({ art, index, baseAPIUrl }) {
    return (
        <li key={index}>
            <div className='frame'>
                <img src={`${baseAPIUrl}/${art.imageURL}`} />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList publicationHistory={art.publicationHistory} />
        </li>
    )
}