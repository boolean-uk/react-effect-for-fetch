import React from "react";
import { SingleAdvice } from "../../interfaces/interface";

interface AdviceSlipProps {
    data: SingleAdvice
    buttonClicked: boolean
    setButtonClicked: (value: boolean) => void
    favourites: string[]
    setFavourite: (value: string[]) => void
}

const AdviceSlip = ({ 
    data, 
    buttonClicked, 
    setButtonClicked,
    favourites,
    setFavourite
    
}: AdviceSlipProps) => {

    const handleFavouriteSave = (advice: string) => {
        if (!favourites.includes(advice)) {
            setFavourite([...favourites, advice]);
        }    
    }

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{data.slip.advice}</p>
            <button onClick={() => setButtonClicked(!buttonClicked)}>Get More Advice</button>
            <button onClick={() => handleFavouriteSave(data.slip.advice)}>Save to Favourties</button>
        </section>
    );
}

export default AdviceSlip;