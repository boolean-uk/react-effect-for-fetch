import { useEffect, useState } from "react";

function generateRandomAdviceId() {
	//There are 224 advice ids as of 2024-02-27
	return Math.random() * 224;
}

const AdviceSlip = ({ favourites, setFavourites }) => {
	const [advice, setAdvice] = useState("");

	const fetchAdvice = () => {
		fetch(`https://api.adviceslip.com/advice/${generateRandomAdviceId()}`)
			.then((response) => response.json())
			.then((adviceData) => {
				console.log(adviceData.slip.advice);
				setAdvice(adviceData.slip.advice);
				return adviceData.slip.advice;
			})
			.catch((error) => console.error("Failed to fetch advice:", error));
	};

	const handleFavourite = () => {
		if (favourites.includes(advice)) return;
		setFavourites([...favourites, advice]);
	};

	const handleGetMoreAdvice = () => {
		fetchAdvice();
	};

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<section className="adivce-slip">
			<h3>Some Advice</h3>
			<p>{advice}</p>
			<button onClick={handleGetMoreAdvice}>Get More Advice</button>
			<button onClick={handleFavourite}>Save to Favourties</button>
		</section>
	);
};

export default AdviceSlip;
