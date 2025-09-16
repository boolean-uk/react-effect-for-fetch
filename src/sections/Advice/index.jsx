import FavouriteSlipsList from "./components/FavouriteSlipsList.jsx";
import AdviceSlip from "./components/AdviceSlip.jsx";
import {useEffect, useState} from "react";

function AdviceSection() {
    const slipsUrl = "https://api.adviceslip.com/advice";
    const [favouriteSlips, setFavouriteSlips] = useState([]);
    const [currentData, setCurrentData] = useState();

    const fetchData = async () => {
        const response = await fetch(slipsUrl);
        const jsonData = await response.json();
        setCurrentData(jsonData.slip);
    };

    const saveSlip = (slip) => {
        if (!favouriteSlips.find((favourite) => favourite.id === slip.id)) {
            setFavouriteSlips([...favouriteSlips, slip]);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            <h2>Advice Section</h2>
            {currentData && (
                <AdviceSlip slip={currentData} getSlip={fetchData} saveSlip={saveSlip}/>
            )}
            <FavouriteSlipsList slips={favouriteSlips}/>
        </section>
    );
}

export default AdviceSection
