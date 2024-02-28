import PublicationHistory from "./PublicationHistoryList";

function ArtListItem({ data }) {
  return (
    <li>
      <div className="frame">
        <img src={`https://boolean-api-server.fly.dev${data.imageURL}`} />
      </div>
      <h3>{data.title}</h3>
      <p>Artist: {data.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {data.publicationHistory.map((work, ind) => {
          return <PublicationHistory key={ind} data={work} />;
        })}
      </ul>
    </li>
  );
}

export default ArtListItem;
