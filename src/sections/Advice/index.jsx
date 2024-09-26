import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
    const [advice, setAdvice] = useState({});
    const [favourites, setFavorites] = useState([]);
    const getData = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const addFavorite = (newFavorite) => {
        setFavorites([...favourites, newFavorite]);
    };

    return (
        <section>
            <h2>Advice Section</h2>
            <section className="adivce-slip">
                <AdviceSlip
                    data={advice}
                    getData={getData}
                    addFavorite={addFavorite}
                />
            </section>
            <section className="favourtite-slips-list">
                <FavoriteSlipsList data={favourites} />
            </section>
        </section>
    );
}

export default AdviceSection;
