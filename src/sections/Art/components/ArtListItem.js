import SubjectList from './SubjectList'

const ArtListItem = ({ artwork }) => {
	const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

	return (
		<li>
			 <div className="frame">
				<img src={imageUrl} alt={`Artwork titled: ${artwork.title}`} />
			</div>
			<h3>{artwork.title}</h3>
			<p>Artist: {artwork.artist_display}</p>
			<SubjectList subjects={artwork.subject_titles} />
		</li>
	)
}

export default ArtListItem