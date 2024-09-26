import { PublicationHistoryList } from "./PublicationHistoryList";

export const ArtListItem = ({artwork}) => {
  return (
    <>
      <li>
        <div className="frame">
          <img src={"https://boolean-api-server.fly.dev" + artwork.imageURL}/>
        </div>
        <h3>{artwork.title}</h3>
        <p>Artist: {artwork.artist}</p>
        <PublicationHistoryList publicationHistory={artwork.publicationHistory}/>
      </li>
    </>
  );
}