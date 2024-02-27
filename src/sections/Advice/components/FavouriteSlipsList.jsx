import React from "react";

const FavouriteSlipsList = (props) => {
	const { favouriteAdvice } = props;
	return (
		<section>
			<h3>Favourite Advice Slips</h3>
			<ul>
				{favouriteAdvice.map((advice, index) => {
					return <li key={index}>{advice.advice}</li>;
				})}
			</ul>
		</section>
	);
};

export default FavouriteSlipsList;
