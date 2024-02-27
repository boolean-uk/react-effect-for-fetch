import PublicationHistoryList from "./PublicationHistoryList";

const ArtListItem = ({ art }) => {
	return (
		<li>
			<div className="frame">
				<img src={`https://boolean-api-server.fly.dev${art.imageURL}`} />
			</div>
			<h3>{art.title}</h3>
			<p>Artist: {art.artist}</p>
			<PublicationHistoryList publications={art.publicationHistory} />
		</li>
	);
};
export default ArtListItem;
