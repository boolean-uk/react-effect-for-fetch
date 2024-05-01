import PublicationHistoryList from "../components/PublicationHistoryList";

export default function ArtListItem({art}) {
    return (
        <>
            {art.map((painting, index) => 
            <li key={index}>
                <div className="frame">
                    <img src={`https://boolean-api-server.fly.dev${painting.imageURL}`}/>
                </div>
                <h3>{painting.title}</h3>
                <p>{painting.artist}</p>
                <PublicationHistoryList painting={painting}/>
            </li>)}
        </>
    )
}