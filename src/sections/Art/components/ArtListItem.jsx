import PublicationHistoryList from "./PublicationHistoryList"

export default function ArtListItem({art, index}) {
    return (
        <>

        <li key={index}>

        <div className="frame">

        <img src={`https://boolean-uk-api-server.fly.dev${art.imageURL}`}
        />
        

        </div>

        <h3>{art.title}</h3>

        <p>Artist: {art.artist}</p>

        <h4>Publication History:</h4>

        <PublicationHistoryList art={art}/>
        

        </li>
        
        </>
    )
}








