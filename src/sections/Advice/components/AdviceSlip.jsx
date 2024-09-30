import { useState, useEffect } from "react";

function AdviceSlip(props) {
    const {favouritesList} = props
    const {setFavouritesList} = props

    const url = "https://api.adviceslip.com/advice"

    const initialAdvice = {
        id: "",
        advice: ""
    }

    const [advice, setAdvice] = useState(initialAdvice)
    const [moreAdvice, setMoreAdvice] = useState(0)

    const getAdvice = () => {
        setMoreAdvice(moreAdvice + 1)
    }

    const addToFavourites = () => {
        if (favouritesList.indexOf(advice) === -1) {
            setFavouritesList([...favouritesList, advice])
        }
    }

    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url)
        const jsonData = await response.json()
        setAdvice(jsonData.slip)
    }
    fetchData()
    }, [moreAdvice])

    

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{advice.advice}</p>
            <button onClick={getAdvice}>Get More Advice</button>
            <button onClick={addToFavourites}>Save to Favourties</button>
        </section>
    )
}

export default AdviceSlip