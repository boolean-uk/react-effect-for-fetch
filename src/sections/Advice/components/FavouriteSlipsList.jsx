function FavouriteSlipsList(props) {
	const { favouriteAdvices } = props;
	return (
		<>
			<h3>Favourite Advice Slips</h3>
			<ul>
				{favouriteAdvices.map((advice, index) => (
					<li key={index}>{advice}</li>
				))}
			</ul>
		</>
	);
}

export default FavouriteSlipsList;
