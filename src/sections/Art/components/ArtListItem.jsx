import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ art }) {

    const baseURL = "https://boolean-uk-api-server.fly.dev";

    return (
        <>
        <li>
            <div className="frame">
                {art.imageURL ? (
                <img
                    src={baseURL + art.imageURL}
                    alt={`${art.title} patch`}
                />
                ) : (
                "No patch"
                )}
            </div> 
            <h3>{art.title}</h3>
            <p>{art.artist}</p>
            <h4>{<PublicationHistoryList
                publication={art.publicationHistory}
            />}</h4> 
        </li>
        </>
    )
}

export default ArtListItem;