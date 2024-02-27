import React, { useEffect, useState } from "react";
import { getRandomAdvise } from "../../../Helpers/APICommunication";
const AdviceSlip = (props) => {
	const { advice, setAdvice, favouriteAdvice, setFavouriteAdvice } = props;
	useEffect(() => {
		getRandomAdvise().then((data) => {
			setAdvice(data.slip);
		});
	}, [setAdvice]);

	const getNewAdviseHandler = () => {
		getRandomAdvise().then((data) => {
			setAdvice(data.slip);
			console.log(data.slip);
		});
	};

	const saveToFavouritesHandler = () => {
		if (!favouriteAdvice.some((favAdvice) => favAdvice.id === advice.id)) {
			setFavouriteAdvice([...favouriteAdvice, advice]);
		}
	};

	console.log(advice);

	return (
		<section className="advice-slip">
			<h3>Some Advice</h3>
			<p>{advice.advice}</p>
			<button onClick={() => getNewAdviseHandler()}>Get More Advice</button>
			<button onClick={() => saveToFavouritesHandler()}>
				Save to Favourites
			</button>
		</section>
	);
};

export default AdviceSlip;
