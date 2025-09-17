
import PublicationHistoryList from "./PublicationHistoryList"

export default function ArtListItem({ artInfo }) {

  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-uk-api-server.fly.dev${artInfo.imageURL}`} />
      </div>

      <h3>{artInfo.title}</h3>
      <p>Artist: {artInfo.artist}</p>

      <PublicationHistoryList history={artInfo.publicationHistory} />

    </li>
  )
}