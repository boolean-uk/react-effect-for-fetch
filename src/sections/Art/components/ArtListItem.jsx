import PublicationHistory from "./PublicationHistoryList";

export default function ArtListItem({ artist }) {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${artist.imageURL}`} />
      </div>
      <h3>{artist.title}</h3>
      <p>Artist: {artist.artist}</p>
      <PublicationHistory artist={artist} />
    </li>
  );
}
