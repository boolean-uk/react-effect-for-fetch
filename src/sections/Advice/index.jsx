import { useEffect, useState } from "react";
import FavouriteSlipsList from "./components/FavouriteSlipsList"; 

function AdviceSection() {
    const [advice, setAdvice] = useState("");
    const [favoriteSlips, setFavoriteSlips] = useState([]);

    const fetchRandomAdvice = async () => {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if (!response.ok) {
                throw new Error("Failed to fetch advice!");
            }
            const data = await response.json();
            setAdvice(data.slip.advice);
        } catch (error) {
            console.error("Error fetching advice:", error);
        }
    };

    const saveToFavorites = () => {
        if (advice && !favoriteSlips.includes(advice)) {
            setFavoriteSlips((prevFavorites) => [...prevFavorites, advice]);
        }
    };

    useEffect(() => {
        fetchRandomAdvice();
    }, []);

    return (
        <section>
            <h2>Advice Section</h2>
            <div className="scroll-container">
                <section className="advice-slip">
                    <h3>Some Advice</h3>
                    <p>{advice || "Loading..."}</p>
                    <button onClick={fetchRandomAdvice}>Get More Advice</button>
                    <button onClick={saveToFavorites}>Save to Favorites</button>
                </section>
                <FavouriteSlipsList favouriteSlips={favoriteSlips} />
            </div>
        </section>
    );
}

export default AdviceSection;
