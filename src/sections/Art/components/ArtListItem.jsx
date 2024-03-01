
function ArtListItem(props) {
    const { art } = props;

    return (
      <li>
        <div className="frame">
          <img src={"https://boolean-api-server.fly.dev" + art.imageURL} />
        </div>
        <h3>{art.title}</h3>
        <p>Artist: {art.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          {art.publicationHistory.map((publication) => {
            <li>{publication}</li>;
          })}
        </ul>
      </li>
    );

}


export default ArtListItem