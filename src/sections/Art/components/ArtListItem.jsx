function ArtListItem(props) {
    return (
        <li>
            <div className="frame">
                <img
                    src={props.imageURL}
                    alt="Image of Painting"
                />
            </div>
            <h3>{props.title}</h3>
            <p>Artist: {props.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {props.publicationHistory.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default ArtListItem;