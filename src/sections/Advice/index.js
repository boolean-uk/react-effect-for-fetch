import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
    const [currentAdvice, setCurrentAdvice] = useState(null);
    const [favouritesState, setFavouritesState] = useState(new Set());

    async function getData() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const jsonResponse = await response.json();
        setCurrentAdvice(jsonResponse.slip);
    }

    useEffect(() => {
        getData();
    }, []);

    const adviceData = {
        data: currentAdvice,
        favouritesState: favouritesState,
    };

    const adviceActions = {
        getData: getData,
        setFavouritesState: setFavouritesState,
    };

    return (
        <section>
            <h2>Advice Section</h2>
            <AdviceSlip
               {...adviceData} {...adviceActions}
            />
            <FavouriteSlipsList favouritesState={favouritesState} />
        </section>
    );
}

export default AdviceSection;
