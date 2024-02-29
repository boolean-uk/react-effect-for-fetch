function ItemsList({ list }) {
    return (
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}

function ArtListItem({
    artItem: { id, title, artist, imageURL, publicationHistory }
}) {
    return (
        <li>
            <div className="frame">
                <img
                    src={"https://boolean-api-server.fly.dev" + imageURL}
                />
            </div>
            <h3>{title}</h3>
            <p>Artist: {artist}</p>
            <h4>Publication History:</h4>
            <ItemsList list={publicationHistory} />
        </li>
    )
}

export default ArtListItem
