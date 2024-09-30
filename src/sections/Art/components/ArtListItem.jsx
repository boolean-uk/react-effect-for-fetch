export default function ArtListItem({
    artItem: {title, artist, imageURL, publicationHistory}
}) {
    return (
    <li>
        <article className="ArtListItem">
            <h3>{title}</h3>
            <h4>{artist}</h4>
            <p>
                <img src={`https://boolean-uk-api-server.fly.dev${imageURL}`}></img>
                
            </p>
            <p>
                <em>
                    {publicationHistory}
                </em>
            </p>
        </article>
    </li>
    )
}