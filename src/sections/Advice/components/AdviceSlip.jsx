import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function AdviceSlip({addToFavorites})
{
    const [advice, setAdvice] = useState("")
    const [moreAdvice, setMoreAdvice] = useState(false)
    
    useEffect(() =>
    {
        fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
        setAdvice(data.slip.advice)
        setMoreAdvice(false)

    })},[moreAdvice])

    const getMoreAdvice = () =>
    {
        setMoreAdvice(true)
    }

    const handleClick = () =>
    {
        addToFavorites({advice})
    }

    return (
        <>
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={getMoreAdvice}>Get More Advice</button>
        <button onClick={handleClick}>Save to Favourties</button>
        </>
    )
}

AdviceSlip.propTypes = {
  addToFavorites: PropTypes.func
};