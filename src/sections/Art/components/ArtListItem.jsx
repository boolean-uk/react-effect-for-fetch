
import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem({ artPiece }) {
    return (
        <li>
            <div className="frame">
                <img
                    src={`https://boolean-api-server.fly.dev/${artPiece.imageURL}`}
                />
            </div>
            <h3>{artPiece.title}</h3>
            <p>{artPiece.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList
                artPiece={artPiece}
            />
        </li>
    )
}

export default ArtListItem