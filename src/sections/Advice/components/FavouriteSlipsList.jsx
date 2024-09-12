const FavouriteSlipsList = ({ favourites }) => {
	return (
		<section className="favourtite-slips-list">
			<h3>Favourite Advice Slips</h3>
			<ul>
				{favourites.map((favourite, index) => {
					return <li key={index}>{favourite}</li>;
				})}
			</ul>
		</section>
	);
};

export default FavouriteSlipsList;
