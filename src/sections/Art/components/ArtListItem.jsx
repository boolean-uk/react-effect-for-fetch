import PublicationHistoryList from "./PublicationHistoryList"

export default function ArtListItem({artListItem: {id, title, artist, imageURL, publicationHistory}}) 

{

    
    return (
        
        <li id={id}>
            <img className="art--img" src={`https://boolean-uk-api-server.fly.dev${imageURL}`} alt="img"></img>
            <h3>{title}</h3>
            <p> Artist: {artist} </p>
            <PublicationHistoryList publicationHistoryList={publicationHistory}/>
        </li>
    )
}