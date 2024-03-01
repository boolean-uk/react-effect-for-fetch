import { useState, useEffect } from "react";
import FavouriteSlipsList from './FavouriteSlipsList'

export default function AdviceSlip() {
    const [advices, setAdvice] = useState('')
    const [favourtites, setFavourite] = useState([])

    console.log(advices)
    console.log(favourtites)
    useEffect(() => {
        fetchAdvice()
    }, [])

    const fetchAdvice = () => {
        fetch(`https://api.adviceslip.com/advice`, { cache: "no-store"})
            .then((response) => response.json())
            .then((data) => setAdvice(data.slip))
    }

    const handleAdvice = () => {
        fetchAdvice();
    }

    const handleFavourite = () => {
        setFavourite([...favourtites, advices.advice])
    }
    return (
        <section className="advice-slip">
            <h3>Some Advice</h3>
            <p>{advices.advice}</p>
            <button onClick={handleAdvice}>Get More Advice</button>
            <button onClick={handleFavourite}>Save to Favourites</button>
            
            {favourtites.map((quote,index) =>
                <FavouriteSlipsList
                    key={index}
                    quote={quote}
                />
            )}

        </section>
    );
}
