import ArtList from "./ArtList";

export default function ArtListItem(props){
    
    return(
        <li>
            <div className="frame">
            <img src={`https://boolean-api-server.fly.dev/${props.item.imageURL}`}/>
            </div>
            <h3>{props.item.title}</h3>
            <p>{props.item.artist}</p>
            <h4>Publication History:</h4>
            <ul>
            {props.item.publicationHistory.map((p, index) => <ArtList key={index} item={p}/>)}
            </ul>
        </li>
    )
}