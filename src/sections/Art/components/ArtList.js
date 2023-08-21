import ArtListItem from './ArtListItem'

const ArtList = ({ artworks }) => {
	return (
		<div className="scroll-container">
		<ul className="art-list">
			{artworks.map(artwork => (
				<ArtListItem key={artwork.id} artwork={artwork} />
			))}
		</ul>
		</div>
	)
}

export default ArtList