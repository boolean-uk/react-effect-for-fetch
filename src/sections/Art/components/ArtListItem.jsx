import PublicationHistoryList from "./PublicationHistoryList"

export default function ArtListItemComponent(props) {

    const { art, apiURL } = props

    return (
        <li>
            <div class="frame">
                <img
                    src={apiURL + art.imageURL}
                />
            </div>
            <h3>{art.title}</h3>
            <p>Artist: {art.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList history={art.publicationHistory} />
        </li>
    )
}