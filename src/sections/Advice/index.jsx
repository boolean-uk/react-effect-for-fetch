import { useState } from "react";
import { useEffect } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		console.log(favourites);
	}, [favourites]);

	return (
		<section>
			<h2>Advice Section</h2>
			<AdviceSlip favourites={favourites} setFavourites={setFavourites} />
			<FavouriteSlipsList favourites={favourites} />
		</section>
	);
}

export default AdviceSection;
