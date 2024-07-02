function ArtListItem(props) {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://boolean-uk-api-server.fly.dev${props.artwork.imageURL}`}
        />
      </div>
      <h3>{props.artwork.title}</h3>
      <p>{props.artwork.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {props.artwork.publicationHistory.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
