function AdviceSlip(props) {
	const { advice, handleNewAdvice, handleSaveFavourite } = props;

	return (
		<>
			<h3>Some Advice</h3>
			<p>{advice}</p>
			<button onClick={() => handleNewAdvice()}>Get More Advice</button>
			<button onClick={() => handleSaveFavourite(advice)}>
				Save to Favourites
			</button>
		</>
	);
}

export default AdviceSlip;
