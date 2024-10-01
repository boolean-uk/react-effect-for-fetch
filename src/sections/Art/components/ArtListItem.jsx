import { PublicationsList } from "./PublicationHistoryList"

export function ArtListItem({ artListItem }) {
    return (
        <li>
            <div className="frame">
                <img src={`https://boolean-uk-api-server.fly.dev/${artListItem.imageURL}`}/>
            </div>
            <h3>{artListItem.title}</h3>
            <p>{artListItem.artist}</p>
            <h4>Publication History:</h4>
            <div>
                <PublicationsList list={artListItem.publicationHistory} />
            </div>
      </li>
    )
}