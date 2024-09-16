import { useEffect, useState } from 'react'
function AdviceSlip( properties ){
    const apiURL = "https://api.adviceslip.com/advice"
    const [advice, setAdvice] = useState({ slip: { advice: "" } })

    const getAdvice = () => {
        fetch(`${apiURL}`)
        .then(response => response.json())
        .then(setAdvice)
    }

    useEffect(() => {
        getAdvice()
    }, [])

    const addFavourit = () => {
        properties.setFavourits(
            [...properties.favourits, advice.slip.advice]
        )
    }

    return(
        <><h3>Some Advice</h3>
        <p>{advice.slip.advice}</p>
        <button onClick={getAdvice}>
            Get More Advice
        </button>
        <button onClick={addFavourit}>
            Save to Favourties
            </button></>
    )
}
export default AdviceSlip