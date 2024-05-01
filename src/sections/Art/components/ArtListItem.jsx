import PublicationHistoryList from "./PublicationHistoryList"

export default function ArtListItem({ item }) {
    return(
        <li>
            <div className="frame">
              <img
                src={`https://boolean-api-server.fly.dev${item.imageURL}`}
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.artist}</p>
            <h4>Publication History:</h4>
            <PublicationHistoryList item={item} />
        </li>
    )
}