import AdviceSlip from './components/AdviceSlip.jsx';
import FavouriteSlipsList from './components/FavouriteSlipsList.jsx';
import { useState } from 'react';

function AdviceSection() {
	const [currentAdvice, setCurrentAdvice] = useState(
		'Fetch an advice using the button bellow!'
	);
	const [favouriteAdvices, setFavouriteAdvices] = useState([]);
	const apiURL = 'https://api.adviceslip.com/advice';

	const handleSaveFavourite = (advice) => {
		if (!favouriteAdvices.includes(advice)) {
			setFavouriteAdvices((prevAdvices) => [...prevAdvices, advice]);
		}
	};

	const handleNewAdvice = () => {
		fetchData();
	};

	const fetchData = async () => {
		const response = await fetch(apiURL);
		const jsonData = await response.json();

		setCurrentAdvice(jsonData.slip.advice);
	};

	return (
		<section>
			<h2>Advice Section</h2>
			<section className="adivce-slip">
				<AdviceSlip
					advice={currentAdvice}
					handleNewAdvice={handleNewAdvice}
					handleSaveFavourite={handleSaveFavourite}
				/>
			</section>

			<section className="favourtite-slips-list">
				<FavouriteSlipsList favouriteAdvices={favouriteAdvices} />
			</section>
		</section>
	);
}

export default AdviceSection;
