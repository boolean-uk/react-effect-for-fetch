import PublicationHistoryList from './PublicationHistoryList';

function ArtListItem(props) {
	const { id, imageURL, title, artist, publicationHistory } = props.artItem;

	return (
		<li key={id}>
			<div className="frame">
				<img src={'https://boolean-uk-api-server.fly.dev/' + imageURL} />
			</div>
			<h3>{title}</h3>
			<p>Artist: {artist}</p>
			<h4>Publication History:</h4>
			<PublicationHistoryList publicationHistory={publicationHistory} />
		</li>
	);
}

export default ArtListItem;
