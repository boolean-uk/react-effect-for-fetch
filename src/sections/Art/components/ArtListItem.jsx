export default function ArtListItem({e}) {
    return(
        <li>
                <div className="frame">
                    <img src={` https://boolean-uk-api-server.fly.dev${e.imageURL}`} />
                </div>
                <h3>{e.title}</h3>
                <p>Artist: {e.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                    <li>
                        {e.publicationHistory[0]}
                    </li>
                    <li>
                    {e.publicationHistory[1]}
                    </li>
                    <li>
                    {e.publicationHistory[2]}
                    </li>
                </ul>
            </li>
    )
}