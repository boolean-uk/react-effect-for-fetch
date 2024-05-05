export default function ArtListItem(props) {
    return (
        <li>
        <div class="frame">
          <img
        src={'https://boolean-uk-api-server.fly.dev' + props.art.imageURL}
          />
        </div>
        <h3>{props.art.title}</h3>
        <p>Artist: {props.art.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          {props.art.publicationHistory.map((item) => {return (<li>{item}</li>)})}
        </ul>
      </li>
    )
}