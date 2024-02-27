import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
import { useState } from "react";
function AdviceSection() {
	const [advice, setAdvice] = useState([]);
	const [favouriteAdvice, setFavouriteAdvice] = useState([]);

	return (
		<section>
			<h2>Advice Section</h2>
			<section className="adivce-slip">
				<AdviceSlip
					advice={advice}
					setAdvice={setAdvice}
					favouriteAdvice={favouriteAdvice}
					setFavouriteAdvice={setFavouriteAdvice}
				/>
			</section>
			<section className="favourtite-slips-list">
				<FavouriteSlipsList
					favouriteAdvice={favouriteAdvice}
					setFavouriteAdvice={setFavouriteAdvice}
				/>
			</section>
		</section>
	);
}

export default AdviceSection;
