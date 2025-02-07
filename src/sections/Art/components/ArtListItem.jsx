import PublicationHistoryList from './PublicationHistoryList';

function ArtListItem(props) {
    props = props.artItem
    return (
        <li>
            <div className="frame">
                <img
                    src={`https://boolean-uk-api-server.fly.dev${props.imageURL}`}
                />
            </div>
            <h3>{props.title}</h3>
            <p>Artist: {props.artist}</p>
            <PublicationHistoryList artItem={props}/>
        </li>
    )
}

export default ArtListItem;