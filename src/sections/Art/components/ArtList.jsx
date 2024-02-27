import ArtListItem from "./ArtListItem";

const ArtList = ({ artList }) => {
	return (
		<ul className="art-list">
			{artList.map((art, index) => {
				return <ArtListItem key={index} art={art} />;
			})}
		</ul>
	);
};

export default ArtList;
