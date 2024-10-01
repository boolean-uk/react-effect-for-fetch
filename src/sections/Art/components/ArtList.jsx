import ArtListItem from './ArtListItem.jsx';

function ArtList(props) {
	const { artList } = props;

	return (
		<ul className="art-list">
			{artList.map((art) => (
				<ArtListItem artItem={art} key={art.id} />
			))}
		</ul>
	);
}

export default ArtList;
